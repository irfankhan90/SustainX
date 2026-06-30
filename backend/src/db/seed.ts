import { findUserByEmail, createUser } from "../models/user";
import bcrypt from "bcryptjs";
import { pool } from "../config/database";

const seed = async () => {
  console.log("Checking if seed admin users exist...");
  try {
    const adminEmail = "admin@sustainx.com";
    const adminUser = await findUserByEmail(adminEmail);
    if (adminUser) {
      console.log(`Seed admin user already exists: ${adminEmail}`);
      // Ensure the role is ADMIN
      if (adminUser.role !== "ADMIN") {
        await pool.query("UPDATE users SET role = 'ADMIN' WHERE email = $1", [adminEmail]);
        console.log(`Updated user ${adminEmail} to ADMIN role.`);
      }
    } else {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash("SustainXAdmin2026!", salt);
      await createUser({
        full_name: "SustainX Administrator",
        email: adminEmail,
        password_hash: passwordHash,
        organization: "GlobalPact SustainX",
        role: "ADMIN"
      });
      console.log(`✓ Admin user successfully seeded: ${adminEmail} / SustainXAdmin2026!`);
    }

    // Seed the user requested admin credentials
    const reqEmail = "er.irfan0987@gmail.com";
    const reqUser = await findUserByEmail(reqEmail);
    if (reqUser) {
      console.log(`Requested admin user already exists: ${reqEmail}`);
      // Ensure the role is ADMIN and name is correct
      await pool.query("UPDATE users SET role = 'ADMIN', full_name = 'Irfan Khan' WHERE email = $1", [reqEmail]);
      // Update password hash
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash("SustainX@123", salt);
      await pool.query("UPDATE users SET password_hash = $1 WHERE email = $2", [passwordHash, reqEmail]);
      console.log(`Updated user ${reqEmail} fields and password.`);
    } else {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash("SustainX@123", salt);
      await createUser({
        full_name: "Irfan Khan",
        email: reqEmail,
        password_hash: passwordHash,
        organization: "GlobalPact SustainX",
        role: "ADMIN"
      });
      console.log(`✓ Requested admin user successfully seeded: ${reqEmail} / SustainX@123`);
    }
  } catch (err: any) {
    console.error("✗ Failed to seed admin user:", err.message);
  } finally {
    await pool.end();
    console.log("Seed script complete. Connection closed.");
  }
};

seed();
