import { pool } from "../config/database";
import fs from "fs";
import path from "path";

const runMigrations = async () => {
  console.log("Starting database migrations...");
  const migrationsDir = path.join(__dirname, "migrations");
  const files = fs.readdirSync(migrationsDir)
    .filter(f => f.endsWith(".sql"))
    .sort();

  if (files.length === 0) {
    console.log("No migration files found.");
    await pool.end();
    return;
  }

  for (const file of files) {
    try {
      const sql = fs.readFileSync(path.join(migrationsDir, file), "utf8");
      await pool.query(sql);
      console.log(`✓ Migration executed: ${file}`);
    } catch (err: any) {
      console.error(`✗ Migration failed (${file}):`, err.message);
      process.exit(1);
    }
  }

  await pool.end();
  console.log("All migrations complete. Connection closed.");
};

runMigrations();
