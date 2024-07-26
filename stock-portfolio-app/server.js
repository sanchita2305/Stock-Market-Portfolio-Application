const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const StockModel = require("./models/Stock");
const DeletedStockModel = require("./models/DeletedStock");


const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/StockModel", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Create a stock (POST)
app.post("/api/stocks", async (req, res) => {
  try {
    const data = new StockModel(req.body);
    await data.save();
    res.status(201).json({ message: "Stock added to watchlist successfully" });
  } catch (error) {
    console.error("Error creating stock:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all watchlist stocks (GET)
app.get("/api/watchlist", async (req, res) => {
  try {
    const watchlist = await StockModel.find();
    res.json(watchlist);
  } catch (error) {
    console.error("Error fetching watchlist:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all stocks (GET)
app.get("/api/stocks", async (req, res) => {
  try {
    const info = await StockModel.find();
    res.json(info);
  } catch (error) {
    console.error("Error fetching stocks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get single stock by ID (GET)
app.get("/api/stocks/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    const info = await StockModel.findById(id);
    if (!info) return res.status(404).json({ error: "Stock not found" });
    res.json(info);
  } catch (err) {
    console.error("Error fetching stock by ID:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update stock by ID (PUT)
app.put("/api/stocks/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    const info = await StockModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!info) return res.status(404).json({ error: "Stock not found" });
    res.json(info);
  } catch (error) {
    console.error("Error updating stock:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete stock by ID (DELETE)
app.delete("/api/stocks/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    const info = await StockModel.findByIdAndDelete(id);
    if (!info) return res.status(404).json({ error: "Stock not found" });
    res.json({ message: "Stock deleted successfully" });
  } catch (error) {
    console.error("Error deleting stock:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/deleted-stocks", async (req, res) => {
  try {
    const deletedStocks = await DeletedStockModel.find();
    res.json(deletedStocks);
  } catch (error) {
    console.error("Error fetching deleted stocks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});







// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const StockModel = require("./models/Stock");

// const app = express();
// const bodyparser = require("body-parser");

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect("mongodb://localhost:27017/StockModel", 
//     {
//       useNewUrlParser: true,
//     useUnifiedTopology: true
//     })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Failed to connect to MongoDB", err);
//   });

// //CREATE POST USING--POST

// app.post("/create",async(req,res)=>{
//     try{
//         const data = new StockModel(req.body)
//         await data.save()
//         res.status(201).send(data)

//     }
//     catch(error)
//     {
//       res.status(500).send(error);
//     }
// });


// // Get all stocks
// app.get("/fetch",async(req,res)=>{
//     try {
//       const info = await StockModel.find();
//       res.send(info);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   })

// //GET SINGLE Stock BY ID
// app.get("/fetch/:id",async(req,res)=>{
//     try{
//       const id=req.params.id.trim()// Remove any extraneous whitespace or newline characters
//       const info=await StockModel.findById(id)
//       if(!info) return res.status(404).send("Post not found")
//         res.send(info)
//     }
//     catch(err){
//       res.status(500).send(err)
//     }
    
//   })


//   //update Stock by id
// app.put("/update/:id",async(req,res)=>{
//     try{
//       const id=req.params.id.trim()
//       const info=await StockModel.findByIdAndUpdate(id,
//         { title: req.body.title, content: req.body.content },
//         { new: true }
  
//       )
//       if (!info) return res.status(404).send("Data not found");
//       res.send(info);
//     }
//     catch (error) {
//       res.status(500).send(error);
//     }
//   })
//   //DELETING A DATA BY ID
// {app.delete("/delete/:id",async(req,res)=>{
//     try{
//       const id=req.params.id.trim()
//       const info=await StockModel.findByIdAndDelete(id)
//       if(!info) 
//         {
//           return res.status(404).send("Data not found")
//         }
//         res.send("deleted")
  
//     }
//     catch(error){
//       res.status(500).send(error);
  
//     }
//   })}
// app.listen(8080, () => {
//   console.log(`Server is running successfully..!! `);
// });
