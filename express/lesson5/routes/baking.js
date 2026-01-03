// routes/baking.js
const express = require('express');
const router = express.Router();

// In-memory baking orders
let bakingOrders = [];

// POST /baking/start → start baking an order
router.post('/start', (req, res) => {
  const { orderId, flavor } = req.body;

  if (!orderId || !flavor) {
    return res.status(400).json({ error: "Missing orderId or flavor." });
  }

  // Add order to baking list
  const newOrder = {
    id: orderId,
    flavor,
    status: "baking"
  };
  bakingOrders.push(newOrder);

  res.status(201).json({
    message: "Baking started",
    order: newOrder
  });
});

// GET /baking/status/:id → check baking status
router.get('/status/:id', (req, res) => {
  const orderId = req.params.id;
  const order = bakingOrders.find(o => o.id === orderId);

  if (!order) {
    return res.status(404).json({ error: "Order not found." });
  }

  res.status(200).json({
    message: "Order status retrieved",
    order
  });
});

module.exports = router;
