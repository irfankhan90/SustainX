import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import { authenticateJWT, AuthenticatedRequest } from "./middleware/auth";
import { errorHandler } from "./utils/errors";
import { testConnection } from "./config/database";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
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

startServer();
