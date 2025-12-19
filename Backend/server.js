import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors({
  origin: "http://localhost:8080", // your frontend
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
