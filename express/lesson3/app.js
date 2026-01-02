// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Import products router
const productsRouter = require('./routes/products');

// Mount router
app.use('/products', productsRouter);

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to Express Lesson 3: PATCH endpoint demo!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
