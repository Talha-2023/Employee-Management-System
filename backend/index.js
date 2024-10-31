import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectToDatabase from "./db/db.js";
import authRouter from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);

connectToDatabase();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
