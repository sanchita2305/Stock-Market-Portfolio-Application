import React, { useState, useEffect } from "react";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/watchlist")
      .then((res) => res.json())
      .then((data) => {
        setWatchlist(data);
      })
      .catch((error) => console.error("Error fetching watchlist:", error));
  }, []);

  const getRandomColor = () => {
    const colors = ["#FF0000", "#00FF00"]; // Red and Green
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="App">
      <h1 className="typing-effect1">Your Stock Watchlist Central</h1>
      <h2>My Watchlist</h2>
      <ul>
        {watchlist.map((stock) => (
          <li key={stock.symbol}>
            {stock.company} ({stock.symbol}) -
            <span style={{ color: getRandomColor() }}>
              {" "}
              ${stock.initial_price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
