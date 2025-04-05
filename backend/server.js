const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/inventory", require("./routes/inventoryRoutes"));

//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "something went wrong!" });
});

const PORT = dotenv.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
