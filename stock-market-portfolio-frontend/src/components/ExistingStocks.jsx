// src/components/ExistingStocks.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ExistingStocks = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = () => {
    fetch("http://localhost:8080/api/stocks")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched stocks:", data); // Debugging line
        setStocks(data);
      })
      .catch((error) => console.error("Error fetching stocks:", error));
  };

  const deleteStock = (id) => {
    fetch(`http://localhost:8080/api/stocks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        fetchStocks(); // Refresh the stock list
      })
      .catch((error) => console.error("Error deleting stock:", error));
  };

  return (
    <div className="App">
      <h1 className="typing-effect1" >Handle Your Existing Stocks </h1>
      <h2>Existing Stocks</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock._id}>
            {stock.company} ({stock.symbol}) - ${stock.initial_price} (Current: ${stock.current_price})
            <br />
            Sector: {stock.sector} | Market Cap: ${stock.market_cap} | P/E Ratio: {stock.pe_ratio} | Dividend Yield: {stock.dividend_yield}%
            <br />
            Notes: {stock.notes}
            <div>
            <button onClick={() => deleteStock(stock._id)}>Delete</button>
            <Link to={`/update-stock/${stock._id}`}>
            <button>Update</button>
            </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExistingStocks;
