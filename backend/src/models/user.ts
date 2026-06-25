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

const usersFilePath = path.join(__dirname, "../../../data/users.json");

const ensureFileExists = () => {
  const dir = path.dirname(usersFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(usersFilePath)) {
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
  if (!isDbConnected()) {
    const users = getFallbackUsers();
    const user = users.find(u => u.email === normalizedEmail);
    return user || null;
  }

  const result = await query(
    "SELECT * FROM users WHERE email = $1 LIMIT 1",
    [normalizedEmail]
  );
  return result.rowCount && result.rowCount > 0 ? (result.rows[0] as User) : null;
};

export const findUserById = async (id: number): Promise<User | null> => {
  if (!isDbConnected()) {
    const users = getFallbackUsers();
    const user = users.find(u => u.id === id);
    return user || null;
  }

  const result = await query(
    "SELECT * FROM users WHERE id = $1 LIMIT 1",
    [id]
  );
  return result.rowCount && result.rowCount > 0 ? (result.rows[0] as User) : null;
};

export const createUser = async (params: UserCreationParams): Promise<User> => {
  const { full_name, email, password_hash, organization, role = "USER" } = params;
  
  if (!isDbConnected()) {
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
  }

  const result = await query(
    `INSERT INTO users (full_name, email, password_hash, organization, role) 
     VALUES ($1, $2, $3, $4, $5) 
     RETURNING *`,
    [full_name.trim(), email.toLowerCase().trim(), password_hash, organization.trim(), role]
  );
  
  return result.rows[0] as User;
};
