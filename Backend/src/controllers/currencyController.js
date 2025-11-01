
import { fetchQuotes } from "../utils/fetchQuotes.js";
import { calculateAverage } from "../utils/calculateAverage.js";
import { calculateSlippage } from "../utils/calculateSlippage.js";

let cachedQuotes = [];
let lastUpdated = 0;

// GET /quotes
export const getQuotes = async (req, res) => {
  try {
    const now = Date.now();
    if (!cachedQuotes.length || now - lastUpdated > 60000) {
      cachedQuotes = await fetchQuotes();
      lastUpdated = now;
    }
    res.json(cachedQuotes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quotes", error: error.message });
  }
};

// GET /average

export const getAverage = async (req, res) => {
  if (!cachedQuotes.length) return res.status(400).json({ message: "No quotes available" });
  const average = calculateAverage(cachedQuotes);
  res.json(average);
};

// GET /slippage

export const getSlippage = async (req, res) => {
  if (!cachedQuotes.length) return res.status(400).json({ message: "No quotes available" });
  const average = calculateAverage(cachedQuotes);
  const slippage = calculateSlippage(cachedQuotes, average);
  res.json(slippage);
};
