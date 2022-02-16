const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
require("dotenv").config();

// Express initialisation
const app = express();

// Connect to database
connectDB();

// Body parser
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

// Run server in port
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
