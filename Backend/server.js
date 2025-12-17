const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Customer = require("./models/Customer");

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Save customer details
app.post("/api/customers", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();

    res.status(201).json({
      message: "Customer details saved successfully",
      customer
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to save customer details",
      error: error.message
    });
  }
});

// Get all customers
app.get("/api/customers", async (req, res) => {
  try {
    const customers = await Customer.find().sort({ contactedAt: -1 });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching customers" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
