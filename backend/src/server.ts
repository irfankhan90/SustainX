import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import adminRoutes from "./routes/admin";
import inquiryRoutes from "./routes/inquiry";
import contactRoutes from "./routes/contact";
import { authenticateJWT, AuthenticatedRequest } from "./middleware/auth";
import { errorHandler } from "./utils/errors";
import { testConnection } from "./config/database";

// Load environment variables
dotenv.config();

// Fail fast if critical environment variables are missing
if (!process.env.JWT_SECRET) {
  console.error("FATAL: JWT_SECRET environment variable is not set. Exiting.");
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map(o => o.trim())
  : "*";

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

// Public health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "SustainX backend server is running healthy.",
    timestamp: new Date(),
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/contacts", contactRoutes);

// Protected route example to verify authentication and role-based middleware
app.get("/api/protected/dashboard", authenticateJWT, (req: AuthenticatedRequest, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the secure SustainX dashboard data stream!",
    user: req.user,
  });
});

// Global Error Handler (must be registered last)
app.use(errorHandler);

const startServer = async () => {
  // Test connection to PostgreSQL pool
  const dbConnected = await testConnection();
  if (!dbConnected) {
    console.warn("WARNING: Running server without active database connection.");
  }

  app.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`  SustainX Server Running on Port: ${PORT}`);
    console.log(`  Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`========================================`);
  });
};

if (process.env.NODE_ENV !== "production") {
  startServer();
}

export default app;
