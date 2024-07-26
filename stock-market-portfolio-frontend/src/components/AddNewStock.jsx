// src/components/AddNewStock.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewStock = () => {
  const [newStock, setNewStock] = useState({
    symbol: "",
    company: "",
    initial_price: "",
    current_price: "",
    sector: "",
    market_cap: "",
    pe_ratio: "",
    dividend_yield: "",
    notes: "",
  });

  const navigate = useNavigate();

  const addStock = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/stocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStock),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        navigate("/existing-stocks"); // Redirect to ExistingStocks page
      })
      .catch((error) => console.error("Error adding stock:", error));
  };

  return (
    <div className="App">
      <h1 className="typing-effect1">Shape Your Investment Future with New Stocks</h1>
      <h2>Add New Stock</h2>
      <form onSubmit={addStock}>
        <input
          type="text"
          placeholder="Symbol"
          value={newStock.symbol}
          onChange={(e) => setNewStock({ ...newStock, symbol: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={newStock.company}
          onChange={(e) => setNewStock({ ...newStock, company: e.target.value })}
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Initial Price"
          value={newStock.initial_price}
          onChange={(e) => setNewStock({ ...newStock, initial_price: e.target.value })}
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Current Price"
          value={newStock.current_price}
          onChange={(e) => setNewStock({ ...newStock, current_price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Sector"
          value={newStock.sector}
          onChange={(e) => setNewStock({ ...newStock, sector: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Market Cap"
          value={newStock.market_cap}
          onChange={(e) => setNewStock({ ...newStock, market_cap: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="P/E Ratio"
          value={newStock.pe_ratio}
          onChange={(e) => setNewStock({ ...newStock, pe_ratio: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Dividend Yield"
          value={newStock.dividend_yield}
          onChange={(e) => setNewStock({ ...newStock, dividend_yield: e.target.value })}
        />
        <textarea
          placeholder="Notes"
          value={newStock.notes}
          onChange={(e) => setNewStock({ ...newStock, notes: e.target.value })}
        />
        <button type="submit">Add Stock</button>
      </form>
    </div>
  );
};

export default AddNewStock;
