import { query } from "../config/database";

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

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const result = await query(
    "SELECT * FROM users WHERE email = $1 LIMIT 1",
    [email.toLowerCase().trim()]
  );
  return result.rowCount && result.rowCount > 0 ? (result.rows[0] as User) : null;
};

export const findUserById = async (id: number): Promise<User | null> => {
  const result = await query(
    "SELECT * FROM users WHERE id = $1 LIMIT 1",
    [id]
  );
  return result.rowCount && result.rowCount > 0 ? (result.rows[0] as User) : null;
};

export const createUser = async (params: UserCreationParams): Promise<User> => {
  const { full_name, email, password_hash, organization, role = "USER" } = params;
  
  const result = await query(
    `INSERT INTO users (full_name, email, password_hash, organization, role) 
     VALUES ($1, $2, $3, $4, $5) 
     RETURNING *`,
    [full_name.trim(), email.toLowerCase().trim(), password_hash, organization.trim(), role]
  );
  
  return result.rows[0] as User;
};
