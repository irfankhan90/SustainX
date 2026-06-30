import { query, isDbConnected } from "../config/database";
import fs from "fs";
import path from "path";

export interface Inquiry {
  id: number;
  full_name: string;
  organization: string;
  email: string;
  phone: string;
  inquiry_type: string;
  message: string;
  status: string;
  ip_address?: string;
  created_at: Date;
  updated_at: Date;
}

export interface InquiryCreationParams {
  full_name: string;
  organization: string;
  email: string;
  phone: string;
  inquiry_type: string;
  message: string;
  ip_address?: string;
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
  const { full_name, organization, email, phone, inquiry_type, message, ip_address } = params;
  
  // Try DB query if database URL or host is configured
  if (process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DB_HOST) {
    try {
      const result = await query(
        `INSERT INTO inquiries (full_name, organization, email, phone, inquiry_type, message, status, ip_address) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
         RETURNING *`,
        [
          full_name.trim(),
          organization.trim(),
          email.toLowerCase().trim(),
          phone.trim(),
          inquiry_type.trim(),
          message.trim(),
          "New",
          ip_address ? ip_address.trim() : null
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
    phone: phone.trim(),
    inquiry_type: inquiry_type.trim(),
    message: message.trim(),
    status: "New",
    ip_address: ip_address ? ip_address.trim() : undefined,
    created_at: new Date(),
    updated_at: new Date()
  };
  inquiries.push(newInquiry);
  saveFallbackInquiries(inquiries);
  return newInquiry;
};

export const getInquiries = async (categoryFilter?: string): Promise<Inquiry[]> => {
  // Try DB query if database URL or host is configured
  if (process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DB_HOST) {
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

export const getInquiryById = async (id: number): Promise<Inquiry | null> => {
  if (process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DB_HOST) {
    try {
      const result = await query("SELECT * FROM inquiries WHERE id = $1 LIMIT 1", [id]);
      if (result && result.rows && result.rows.length > 0) {
        return result.rows[0] as Inquiry;
      }
      return null;
    } catch (err: any) {
      console.warn(`[Database] Fetch by ID failed, falling back to JSON. Reason: ${err.message}`);
    }
  }

  const inquiries = getFallbackInquiries();
  const inquiry = inquiries.find(i => i.id === id);
  return inquiry || null;
};

export const updateInquiryStatus = async (id: number, status: string): Promise<Inquiry | null> => {
  if (process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DB_HOST) {
    try {
      const result = await query(
        "UPDATE inquiries SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *",
        [status.trim(), id]
      );
      if (result && result.rows && result.rows.length > 0) {
        return result.rows[0] as Inquiry;
      }
      return null;
    } catch (err: any) {
      console.warn(`[Database] Update status failed, falling back to JSON. Reason: ${err.message}`);
    }
  }

  const inquiries = getFallbackInquiries();
  const idx = inquiries.findIndex(i => i.id === id);
  if (idx !== -1) {
    inquiries[idx].status = status.trim();
    inquiries[idx].updated_at = new Date();
    saveFallbackInquiries(inquiries);
    return inquiries[idx];
  }
  return null;
};

export const deleteInquiry = async (id: number): Promise<boolean> => {
  if (process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DB_HOST) {
    try {
      const result = await query("DELETE FROM inquiries WHERE id = $1", [id]);
      return result.rowCount !== null && result.rowCount > 0;
    } catch (err: any) {
      console.warn(`[Database] Delete failed, falling back to JSON. Reason: ${err.message}`);
    }
  }

  const inquiries = getFallbackInquiries();
  const filtered = inquiries.filter(i => i.id !== id);
  if (filtered.length !== inquiries.length) {
    saveFallbackInquiries(filtered);
    return true;
  }
  return false;
};

export interface InquiryStats {
  totalInquiries: number;
  newInquiries: number;
  contactRequests: number;
  todayInquiries: number;
  partnerRequests: number;
  trainingEnquiries: number;
}

export const getInquiryStats = async (): Promise<InquiryStats> => {
  if (process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DB_HOST) {
    try {
      const totalResult = await query("SELECT COUNT(*) as count FROM inquiries");
      const newResult = await query("SELECT COUNT(*) as count FROM inquiries WHERE status = 'New'");
      
      const contactResult = await query(
        "SELECT COUNT(*) as count FROM inquiries WHERE inquiry_type IN ('Other', 'Discuss a Project Opportunity', 'Request Strategic Advisory', 'Access Energy Trading Services')"
      );
      
      const todayResult = await query(
        "SELECT COUNT(*) as count FROM inquiries WHERE created_at >= CURRENT_DATE"
      );

      const partnerResult = await query(
        "SELECT COUNT(*) as count FROM inquiries WHERE inquiry_type IN ('Strategic Partnership', 'Develop With SustainX', 'Partner With Us')"
      );

      const trainingResult = await query(
        "SELECT COUNT(*) as count FROM inquiries WHERE inquiry_type IN ('Capacity Building', 'Accelerate Transformation')"
      );

      return {
        totalInquiries: parseInt(totalResult.rows[0].count) || 0,
        newInquiries: parseInt(newResult.rows[0].count) || 0,
        contactRequests: parseInt(contactResult.rows[0].count) || 0,
        todayInquiries: parseInt(todayResult.rows[0].count) || 0,
        partnerRequests: parseInt(partnerResult.rows[0].count) || 0,
        trainingEnquiries: parseInt(trainingResult.rows[0].count) || 0
      };
    } catch (err: any) {
      console.warn(`[Database] Stats failed, falling back to JSON. Reason: ${err.message}`);
    }
  }

  const inquiries = getFallbackInquiries();
  const totalInquiries = inquiries.length;
  const newInquiries = inquiries.filter(i => i.status === "New").length;
  
  const contactTypes = ["Other", "Discuss a Project Opportunity", "Request Strategic Advisory", "Access Energy Trading Services"];
  const contactRequests = inquiries.filter(i => contactTypes.includes(i.inquiry_type)).length;
  
  const partnerTypes = ["Strategic Partnership", "Develop With SustainX", "Partner With Us"];
  const partnerRequests = inquiries.filter(i => partnerTypes.includes(i.inquiry_type)).length;

  const trainingTypes = ["Capacity Building", "Accelerate Transformation"];
  const trainingEnquiries = inquiries.filter(i => trainingTypes.includes(i.inquiry_type)).length;

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayInquiries = inquiries.filter(i => new Date(i.created_at) >= todayStart).length;

  return {
    totalInquiries,
    newInquiries,
    contactRequests,
    todayInquiries,
    partnerRequests,
    trainingEnquiries
  };
};
