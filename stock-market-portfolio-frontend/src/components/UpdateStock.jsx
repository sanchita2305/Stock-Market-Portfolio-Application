// src/components/UpdateStock.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateStock = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stock, setStock] = useState({
    symbol: '',
    company: '',
    initial_price: '',
    current_price: '',
    sector: '',
    market_cap: '',
    pe_ratio: '',
    dividend_yield: '',
    notes: ''
  });

  useEffect(() => {
    fetch(`http://localhost:8080/api/stocks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStock(data);
      })
      .catch((error) => console.error("Error fetching stock:", error));
  }, [id]);

  const updateStock = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/stocks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stock),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Stock updated successfully");
        navigate("/existing-stocks");  // Redirect to the ExistingStocks page
      })
      .catch((error) => console.error("Error updating stock:", error));
  };

  return (
    <div className="App">
      <h1>Update Stock</h1>
      <form onSubmit={updateStock}>
        <input
          type="text"
          placeholder="Symbol"
          value={stock.symbol}
          onChange={(e) => setStock({ ...stock, symbol: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={stock.company}
          onChange={(e) => setStock({ ...stock, company: e.target.value })}
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Initial Price"
          value={stock.initial_price}
          onChange={(e) => setStock({ ...stock, initial_price: e.target.value })}
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Current Price"
          value={stock.current_price}
          onChange={(e) => setStock({ ...stock, current_price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Sector"
          value={stock.sector}
          onChange={(e) => setStock({ ...stock, sector: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Market Cap"
          value={stock.market_cap}
          onChange={(e) => setStock({ ...stock, market_cap: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="P/E Ratio"
          value={stock.pe_ratio}
          onChange={(e) => setStock({ ...stock, pe_ratio: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Dividend Yield"
          value={stock.dividend_yield}
          onChange={(e) => setStock({ ...stock, dividend_yield: e.target.value })}
        />
        <textarea
          placeholder="Notes"
          value={stock.notes}
          onChange={(e) => setStock({ ...stock, notes: e.target.value })}
        />
        <button type="submit">Update Stock</button>
      </form>
    </div>
  );
};

export default UpdateStock;
