import { query, isDbConnected } from "../config/database";
import fs from "fs";
import path from "path";

export interface Inquiry {
  id: number;
  full_name: string;
  organization: string;
  email: string;
  inquiry_type: string;
  message: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface InquiryCreationParams {
  full_name: string;
  organization: string;
  email: string;
  inquiry_type: string;
  message: string;
}

const inquiriesFilePath = process.env.VERCEL
  ? "/tmp/inquiries.json"
  : path.join(__dirname, "../../../data/inquiries.json");

const ensureFileExists = () => {
  const dir = path.dirname(inquiriesFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(inquiriesFilePath)) {
    fs.writeFileSync(inquiriesFilePath, JSON.stringify([]));
  }
};

const getFallbackInquiries = (): Inquiry[] => {
  ensureFileExists();
  try {
    const data = fs.readFileSync(inquiriesFilePath, "utf8");
    return JSON.parse(data) as Inquiry[];
  } catch (err) {
    return [];
  }
};

const saveFallbackInquiries = (inquiries: Inquiry[]) => {
  ensureFileExists();
  fs.writeFileSync(inquiriesFilePath, JSON.stringify(inquiries, null, 2));
};

export const createInquiry = async (params: InquiryCreationParams): Promise<Inquiry> => {
  const { full_name, organization, email, inquiry_type, message } = params;
  
  // Try DB query if database URL or host is configured
  if (process.env.DATABASE_URL || process.env.DB_HOST) {
    try {
      const result = await query(
        `INSERT INTO inquiries (full_name, organization, email, inquiry_type, message, status) 
         VALUES ($1, $2, $3, $4, $5, $6) 
         RETURNING *`,
        [
          full_name.trim(),
          organization.trim(),
          email.toLowerCase().trim(),
          inquiry_type.trim(),
          message.trim(),
          "New"
        ]
      );
      if (result && result.rows && result.rows.length > 0) {
        return result.rows[0] as Inquiry;
      }
    } catch (err: any) {
      console.warn(`[Database] Query failed, falling back to JSON storage. Reason: ${err.message}`);
    }
  }

  // Fallback local JSON file storage
  const inquiries = getFallbackInquiries();
  const newInquiry: Inquiry = {
    id: inquiries.length > 0 ? Math.max(...inquiries.map(i => i.id)) + 1 : 1,
    full_name: full_name.trim(),
    organization: organization.trim(),
    email: email.toLowerCase().trim(),
    inquiry_type: inquiry_type.trim(),
    message: message.trim(),
    status: "New",
    created_at: new Date(),
    updated_at: new Date()
  };
  inquiries.push(newInquiry);
  saveFallbackInquiries(inquiries);
  return newInquiry;
};

export const getInquiries = async (categoryFilter?: string): Promise<Inquiry[]> => {
  // Try DB query if database URL or host is configured
  if (process.env.DATABASE_URL || process.env.DB_HOST) {
    try {
      if (categoryFilter && categoryFilter.trim() !== "") {
        const result = await query(
          "SELECT * FROM inquiries WHERE inquiry_type = $1 ORDER BY created_at DESC",
          [categoryFilter.trim()]
        );
        return result.rows as Inquiry[];
      } else {
        const result = await query(
          "SELECT * FROM inquiries ORDER BY created_at DESC"
        );
        return result.rows as Inquiry[];
      }
    } catch (err: any) {
      console.warn(`[Database] Fetch failed, falling back to JSON storage. Reason: ${err.message}`);
    }
  }

  // Fallback local JSON file storage lookup
  const inquiries = getFallbackInquiries();
  let filtered = inquiries;
  if (categoryFilter && categoryFilter.trim() !== "") {
    filtered = inquiries.filter(i => i.inquiry_type === categoryFilter.trim());
  }
  // Sort desc by created_at
  return filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
};
