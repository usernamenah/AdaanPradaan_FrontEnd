const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3001;

// MongoDB Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'AadaanPradan';

// Enable CORS for all routes
app.use(cors());

app.get('/', async (req, res) => {
  // Connect to MongoDB
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('log_ins');

    // Fetch data from MongoDB
    const data = await collection.find().toArray();

    // Send the data as JSON response
    res.json(data);
  } catch (err) {
    console.error('Error occurred:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    // Close the connection
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
