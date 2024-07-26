const mongoose = require("mongoose");

const deletedStockSchema = new mongoose.Schema({
    symbol: String,
    company: String,
    initial_price: Number,
    current_price: Number,
    sector: String,
    market_cap: Number,
    pe_ratio: Number,
    dividend_yield: Number,
    notes: String,
    deletedAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model("DeletedStock", deletedStockSchema);