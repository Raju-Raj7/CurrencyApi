import express from "express";
import cors from "cors";
import { getQuotes, getAverage, getSlippage } from "./src/controllers/currencyController.js";

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.get("/api/quotes", getQuotes);
app.get("/api/average", getAverage);
app.get("/api/slippage", getSlippage);

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
