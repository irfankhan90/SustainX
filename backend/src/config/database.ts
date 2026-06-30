import { Pool, PoolConfig } from "pg";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

let poolConfig: PoolConfig = {};

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (connectionString) {
  poolConfig = {
    connectionString,
    ssl: isProduction ? { rejectUnauthorized: false } : false,
  };
} else {
  poolConfig = {
    host: process.env.DB_HOST || process.env.POSTGRES_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || process.env.POSTGRES_PORT || "5432", 10),
    user: process.env.DB_USER || process.env.POSTGRES_USER || "postgres",
    password: process.env.DB_PASSWORD || process.env.POSTGRES_PASSWORD || "postgres",
    database: process.env.DB_NAME || process.env.POSTGRES_DATABASE || "sustainx",
    ssl: isProduction ? { rejectUnauthorized: false } : false,
  };
}

export const pool = new Pool(poolConfig);

export const query = async (text: string, params?: any[]) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  if (!isProduction) {
    console.log("Executed query", { text, duration, rows: res.rowCount });
  }
  return res;
};

let isConnected = false;

export const isDbConnected = () => isConnected;

export const testConnection = async (): Promise<boolean> => {
  try {
    const client = await pool.connect();
    console.log("PostgreSQL Database connected successfully.");
    client.release();
    isConnected = true;
    return true;
  } catch (err: any) {
    console.error("PostgreSQL Database connection error:", err.message);
    isConnected = false;
    return false;
  }
};
