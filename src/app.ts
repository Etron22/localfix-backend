import cors from "cors";
import express, { type Request, type Response } from "express";

import pool from "./db/connection";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("LocalFix Backend Running");
});

app.get("/test-db", async (_req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown database error",
    });
  }
});

export default app;
