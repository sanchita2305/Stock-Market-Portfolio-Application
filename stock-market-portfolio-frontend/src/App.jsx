import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Stocks from "./components/Stocks";
import Watchlist from "./components/Watchlist";
import ExistingStocks from "./components/ExistingStocks";
import AddNewStock from "./components/AddNewStock";
import UpdateStock from "./components/UpdateStock";  

import logo from '../src/Images/logo.jpg';  

import Home from './Home/Home';
import Footer from './Home/footer/Footer'; 

// import ManageStocks from "./components/ManageStocks";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (stock) => {
    fetch("http://localhost:8080/api/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stock),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setWatchlist([...watchlist, stock]);
      })
      .catch((error) => console.error("Error adding to watchlist:", error));
  };

  return (
    <Router>
      {/* <nav>
        <NavLink to="/stocks">Stocks</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
       
        <NavLink to="/existing-stocks">Existing Stocks</NavLink>
        <NavLink to="/add-new-stock">Add New Stock</NavLink>

        </nav> */}

        

{/* <nav>
  <NavLink to="/stocks" className={({ isActive }) => (isActive ? 'active' : '')}>Stocks</NavLink>
  <NavLink to="/watchlist" className={({ isActive }) => (isActive ? 'active' : '')}>Watchlist</NavLink>
  <NavLink to="/add-new-stock" className={({ isActive }) => (isActive ? 'active' : '')}>Add New Stock</NavLink>
  <NavLink to="/manage-stocks" className={({ isActive }) => (isActive ? 'active' : '')}>Manage Stocks</NavLink>
</nav> */}

<nav>
  <div className="brand">
  <img src={logo} alt="Brand Logo" className="logo" />  {/* Add logo image */}
    <span className="brand-name typing-effect1">Stock Portfolio</span>
  </div>

  <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
  <NavLink to="/stocks" className={({ isActive }) => (isActive ? 'active' : '')}>Stocks</NavLink>
  <NavLink to="/watchlist" className={({ isActive }) => (isActive ? 'active' : '')}>Watchlist</NavLink>
  <NavLink to="/add-new-stock" className={({ isActive }) => (isActive ? 'active' : '')}>Add New Stock</NavLink>
  <NavLink to="/existing-stocks" className={({ isActive }) => (isActive ? 'active' : '')}>Existing Stocks</NavLink>
</nav>

     
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/stocks" element={<Stocks addToWatchlist={addToWatchlist} />} />
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />} />
        <Route path="/existing-stocks" element={<ExistingStocks />} />
        <Route path="/add-new-stock" element={<AddNewStock />} />
        <Route path="/update-stock/:id" element={<UpdateStock />} /> {/* Add this route for updating a stock */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


































// // src/App.js

// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
// } from "react-router-dom";
// import "./App.css";

// const Stocks = ({ addToWatchlist }) => {
//   const [stocks, setStocks] = useState([]);

//   useEffect(() => {
//     // Fetch stock data from the backend
//     fetch("http://localhost:8080/api/stocks")
//       .then((res) => res.json())
//       .then((data) => setStocks(data))
//       .catch((error) => console.error("Error fetching stocks:", error));
//   }, []);
//   console.log(stocks, "Stocksdata"); // Fixed: Log `stocks` instead of `setStocks`

//   const getRandomColor = () => {
//     const colors = ["#FF0000", "#00FF00"]; // Red and Green
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   return (
//     <div className="App">
//       <h1>Stock Market Portfolio </h1>
//       <h2>Stocks</h2>
//       <ul>
//         {stocks.map((stock) => (
//           <li key={stock.symbol}>
//             {stock.company} ({stock.symbol}) -
//             <span style={{ color: getRandomColor() }}>
//               {" "}
//               ${stock.initial_price}
//             </span>
//             <button onClick={() => addToWatchlist(stock)}>
//               Add to My Watchlist
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const Watchlist = ({ watchlist }) => {
//   const getRandomColor = () => {
//     const colors = ["#FF0000", "#00FF00"]; // Red and Green
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   return (
//     <div className="App">
//       <h1>Stock Market Portfolio</h1>
//       <h2>My Watchlist</h2>
//       <ul>
//         {watchlist.map((stock) => (
//           <li key={stock.symbol}>
//             {stock.company} ({stock.symbol}) -
//             <span style={{ color: getRandomColor() }}>
//               {" "}
//               ${stock.initial_price}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// function App() {
//   const [watchlist, setWatchlist] = useState([]);

//   const addToWatchlist = (stock) => {
//     // Add stock to watchlist
//     fetch("http://localhost:8080/api/watchlist", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(stock),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // Show an alert with the message received from the server
//         alert(data.message);
//         setWatchlist([...watchlist, stock]);
//       })
//       .catch((error) =>
//         console.error("Error adding to watchlist:", error)
//       );
//   };

//   return (
//     <Router>
//       <nav>
//         <NavLink to="/stocks">Stocks</NavLink>
//         <NavLink to="/watchlist">Watchlist</NavLink>
//       </nav>
//       <Routes>
//         <Route
//           path="/stocks"
//           element={<Stocks addToWatchlist={addToWatchlist} />}
//         />
//         <Route
//           path="/watchlist"
//           element={<Watchlist watchlist={watchlist} />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
