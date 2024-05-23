const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3010;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/AadaanPradan', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB is connected");
  }).catch((err) => {
    console.error("Error in MongoDB connection:", err);
  });

// Middleware
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define mongoose schema
const Schema = mongoose.Schema;
const postSchema = new Schema({
    college: {
    type: String,
  },
  Roll_no: {
    type: String,
  },
  password: {
    type: String,
  },
  section: {
    type: String,
  },
  year: {
    type: String,
  },
  
});

// Define mongoose model
const SellPost = mongoose.model("log_ins", postSchema);

// Routes
app.post("/sellers/postdata", async (req, res) => {
  try {
    console.log(req.body);
    const {college,Roll_no,password,section,year} = req.body;
    const newSellPost = new SellPost(req.body);
    const savedSellPost = await newSellPost.save();
    res.status(201).json(savedSellPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
