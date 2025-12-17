const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());

const Product = require("./models/Product");

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
