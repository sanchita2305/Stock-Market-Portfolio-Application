// import React, { useState, useEffect } from "react";

// const ManageStocks = () => {
//   const [stocks, setStocks] = useState([]);
//   const [newStock, setNewStock] = useState({ symbol: "", company: "", initial_price: "" });
//   const [editingStock, setEditingStock] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/stocks")
//       .then((res) => res.json())
//       .then((data) => setStocks(data))
//       .catch((error) => console.error("Error fetching stocks:", error));
//   }, []);

//   const addStock = () => {
//     fetch("http://localhost:8080/api/stocks", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newStock),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert(data.message);
//         setStocks([...stocks, newStock]);
//         setNewStock({ symbol: "", company: "", initial_price: "" });
//       })
//       .catch((error) => console.error("Error adding stock:", error));
//   };

//   const deleteStock = (id) => {
//     fetch(`http://localhost:8080/api/stocks/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert(data.message);
//         setStocks(stocks.filter((stock) => stock._id !== id));
//       })
//       .catch((error) => console.error("Error deleting stock:", error));
//   };

//   const updateStock = (id) => {
//     fetch(`http://localhost:8080/api/stocks/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(editingStock),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert(data.message);
//         setStocks(stocks.map((stock) => (stock._id === id ? editingStock : stock)));
//         setEditingStock(null);
//       })
//       .catch((error) => console.error("Error updating stock:", error));
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditingStock((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="App">
//       <h1>Manage Stocks</h1>

//       <h2>Add New Stock</h2>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           addStock();
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Symbol"
//           value={newStock.symbol}
//           onChange={(e) => setNewStock({ ...newStock, symbol: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Company"
//           value={newStock.company}
//           onChange={(e) => setNewStock({ ...newStock, company: e.target.value })}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Initial Price"
//           value={newStock.initial_price}
//           onChange={(e) => setNewStock({ ...newStock, initial_price: e.target.value })}
//           required
//         />
//         <button type="submit">Add Stock</button>
//       </form>

//       <h2>Existing Stocks</h2>
//       <ul>
//         {stocks.map((stock) => (
//           <li key={stock._id}>
//             {editingStock && editingStock._id === stock._id ? (
//               <>
//                 <input
//                   type="text"
//                   name="symbol"
//                   value={editingStock.symbol}
//                   onChange={handleEditChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="company"
//                   value={editingStock.company}
//                   onChange={handleEditChange}
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="initial_price"
//                   value={editingStock.initial_price}
//                   onChange={handleEditChange}
//                   required
//                 />
//                 <button onClick={() => updateStock(stock._id)}>Save</button>
//                 <button onClick={() => setEditingStock(null)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 {stock.company} ({stock.symbol}) - ${stock.initial_price}
//                 <button onClick={() => deleteStock(stock._id)}>Delete</button>
//                 <button onClick={() => setEditingStock(stock)}>Edit</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ManageStocks;
