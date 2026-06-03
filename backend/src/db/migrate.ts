import { pool } from "../config/database";
import fs from "fs";
import path from "path";

const runMigrations = async () => {
  console.log("Starting database migrations...");
  const migrationFile = "001_create_users_table.sql";
  const migrationPath = path.join(__dirname, "migrations", migrationFile);

  try {
    const sql = fs.readFileSync(migrationPath, "utf8");
    await pool.query(sql);
    console.log(`✓ Migration executed successfully: ${migrationFile}`);
  } catch (err: any) {
    console.error("✗ Migration failed:", err.message);
    process.exit(1);
  } finally {
    await pool.end();
    console.log("Database connection closed.");
  }
};

runMigrations();
