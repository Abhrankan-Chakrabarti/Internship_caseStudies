// routes/products.js
const express = require('express');
const router = express.Router();

// Sample product data
let products = [
  { id: "1", name: "Bananas", price: 1.5, inStock: true },
  { id: "2", name: "Apples", price: 2.0, inStock: false }
];

// PATCH endpoint to update inStock status
router.patch('/:id/inStock', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  const { inStock } = req.body;

  // Product not found
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  // Validation: must be boolean
  if (typeof inStock !== 'boolean') {
    return res.status(400).json({ error: 'Invalid inStock value. Must be true or false.' });
  }

  // Update product
  product.inStock = inStock;
  res.status(200).json(product);
});

module.exports = router;
