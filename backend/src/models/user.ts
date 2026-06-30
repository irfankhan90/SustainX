import { query, isDbConnected } from "../config/database";
import fs from "fs";
import path from "path";

export interface User {
  id: number;
  full_name: string;
  email: string;
  password_hash: string;
  organization: string;
  role: "USER" | "ADMIN";
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface UserCreationParams {
  full_name: string;
  email: string;
  password_hash: string;
  organization: string;
  role?: "USER" | "ADMIN";
}

const usersFilePath = process.env.VERCEL
  ? "/tmp/users.json"
  : path.join(__dirname, "../../../data/users.json");

const ensureFileExists = () => {
  const dir = path.dirname(usersFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(usersFilePath)) {
    if (process.env.VERCEL) {
      try {
        const defaultAdmins = [
          {
            "id": 1,
            "full_name": "SustainX Administrator",
            "email": "admin@sustainx.com",
            "password_hash": "$2a$10$Omk/QnvUehSpJ3fwHJuk/u91w6625.uZzH4rDKHlxkFPPWGuQ6XTa",
            "organization": "GlobalPact SustainX",
            "role": "ADMIN",
            "is_active": true,
            "created_at": "2026-06-20T10:51:43.186Z",
            "updated_at": "2026-06-20T10:51:43.186Z"
          },
          {
            "id": 2,
            "full_name": "Irfan Khan",
            "email": "er.irfan0987@gmail.com",
            "password_hash": "$2a$10$5Rp9NFJW7XRH3CLdgE28HOsdjDuw3bDNeBWJ4RpFg1wst8cjnXoby",
            "organization": "GlobalPact SustainX",
            "role": "ADMIN",
            "is_active": true,
            "created_at": "2026-06-29T08:58:44.376Z",
            "updated_at": "2026-06-29T08:58:44.376Z"
          }
        ];
        fs.writeFileSync(usersFilePath, JSON.stringify(defaultAdmins, null, 2));
        console.log("[Users Fallback] Pre-seeded admins initialized successfully in Vercel /tmp.");
        return;
      } catch (err: any) {
        console.warn(`[Users Fallback] Failed to initialize pre-seeded users: ${err.message}`);
      }
    }
    fs.writeFileSync(usersFilePath, JSON.stringify([]));
  }
};

const getFallbackUsers = (): User[] => {
  ensureFileExists();
  try {
    const data = fs.readFileSync(usersFilePath, "utf8");
    return JSON.parse(data) as User[];
  } catch (err) {
    return [];
  }
};

const saveFallbackUsers = (users: User[]) => {
  ensureFileExists();
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const normalizedEmail = email.toLowerCase().trim();
  if (process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DB_HOST) {
    try {
      const result = await query(
        "SELECT * FROM users WHERE email = $1 LIMIT 1",
        [normalizedEmail]
      );
      if (result && result.rows && result.rows.length > 0) {
        return result.rows[0] as User;
      }
      return null;
    } catch (err: any) {
      console.warn(`[Database] findUserByEmail query failed, falling back to JSON. Reason: ${err.message}`);
    }
  }

  const users = getFallbackUsers();
  const user = users.find(u => u.email === normalizedEmail);
  return user || null;
};

export const findUserById = async (id: number): Promise<User | null> => {
  if (process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DB_HOST) {
    try {
      const result = await query(
        "SELECT * FROM users WHERE id = $1 LIMIT 1",
        [id]
      );
      if (result && result.rows && result.rows.length > 0) {
        return result.rows[0] as User;
      }
      return null;
    } catch (err: any) {
      console.warn(`[Database] findUserById query failed, falling back to JSON. Reason: ${err.message}`);
    }
  }

  const users = getFallbackUsers();
  const user = users.find(u => u.id === id);
  return user || null;
};

export const createUser = async (params: UserCreationParams): Promise<User> => {
  const { full_name, email, password_hash, organization, role = "USER" } = params;
  
  if (process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DB_HOST) {
    try {
      const result = await query(
        `INSERT INTO users (full_name, email, password_hash, organization, role) 
         VALUES ($1, $2, $3, $4, $5) 
         RETURNING *`,
        [full_name.trim(), email.toLowerCase().trim(), password_hash, organization.trim(), role]
      );
      if (result && result.rows && result.rows.length > 0) {
        return result.rows[0] as User;
      }
    } catch (err: any) {
      console.warn(`[Database] createUser query failed, falling back to JSON. Reason: ${err.message}`);
    }
  }

  const users = getFallbackUsers();
  const newUser: User = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    full_name: full_name.trim(),
    email: email.toLowerCase().trim(),
    password_hash,
    organization: organization.trim(),
    role,
    is_active: true,
    created_at: new Date(),
    updated_at: new Date()
  };
  users.push(newUser);
  saveFallbackUsers(users);
  return newUser;
};
