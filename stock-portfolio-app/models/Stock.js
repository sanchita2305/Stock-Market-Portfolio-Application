// models/Stock.js

const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  company: { type: String, required: true },
  initial_price: { type: Number, required: true },
  current_price: { type: Number, default: 0 },
  sector: { type: String },
  market_cap: { type: Number },
  pe_ratio: { type: Number },
  dividend_yield: { type: Number },
  notes: { type: String },
});

const StockModel = mongoose.model("Stock", StockSchema);

module.exports = StockModel;
