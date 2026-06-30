import { query } from "../config/database";
import fs from "fs";
import path from "path";

export interface Contact {
  id: number;
  full_name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface ContactCreationParams {
  full_name: string;
  email: string;
  subject: string;
  message: string;
}

const contactsFilePath = process.env.VERCEL
  ? "/tmp/contacts.json"
  : path.join(__dirname, "../../../data/contacts.json");

const ensureFileExists = () => {
  const dir = path.dirname(contactsFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(contactsFilePath)) {
    fs.writeFileSync(contactsFilePath, JSON.stringify([]));
  }
};

const getFallbackContacts = (): Contact[] => {
  ensureFileExists();
  try {
    const data = fs.readFileSync(contactsFilePath, "utf8");
    return JSON.parse(data) as Contact[];
  } catch (err) {
    return [];
  }
};

const saveFallbackContacts = (contacts: Contact[]) => {
  ensureFileExists();
  fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2));
};

export const createContact = async (params: ContactCreationParams): Promise<Contact> => {
  const { full_name, email, subject, message } = params;
  
  if (process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DB_HOST) {
    try {
      const result = await query(
        `INSERT INTO contacts (full_name, email, subject, message, status) 
         VALUES ($1, $2, $3, $4, $5) 
         RETURNING *`,
        [
          full_name.trim(),
          email.toLowerCase().trim(),
          subject.trim(),
          message.trim(),
          "New"
        ]
      );
      if (result && result.rows && result.rows.length > 0) {
        return result.rows[0] as Contact;
      }
    } catch (err: any) {
      console.warn(`[Database] Query failed, falling back to JSON storage. Reason: ${err.message}`);
    }
  }

  // Fallback local JSON file storage
  const contacts = getFallbackContacts();
  const newContact: Contact = {
    id: contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1,
    full_name: full_name.trim(),
    email: email.toLowerCase().trim(),
    subject: subject.trim(),
    message: message.trim(),
    status: "New",
    created_at: new Date(),
    updated_at: new Date()
  };
  contacts.push(newContact);
  saveFallbackContacts(contacts);
  return newContact;
};

export const getContacts = async (): Promise<Contact[]> => {
  if (process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DB_HOST) {
    try {
      const result = await query(
        "SELECT * FROM contacts ORDER BY created_at DESC"
      );
      return result.rows as Contact[];
    } catch (err: any) {
      console.warn(`[Database] Fetch failed, falling back to JSON storage. Reason: ${err.message}`);
    }
  }

  // Fallback local JSON file storage lookup
  const contacts = getFallbackContacts();
  return contacts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
};
