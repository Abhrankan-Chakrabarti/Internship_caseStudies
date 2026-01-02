// routes/transfer.js
const express = require('express');
const { validate: uuidValidate } = require('uuid');
const router = express.Router();

// Valid RFC-4122 UUIDs (v4 format)
const ALICE_ID = "11111111-1111-4111-8111-111111111111";
const BOB_ID   = "22222222-2222-4222-8222-222222222222";

let customers = [
  { customerId: ALICE_ID, name: "Alice", points: 500 },
  { customerId: BOB_ID, name: "Bob", points: 300 }
];

// POST /transfer endpoint
router.post('/', (req, res) => {
  const { fromCustomerId, toCustomerId, points } = req.body;

  // Validate UUIDs
  if (!uuidValidate(fromCustomerId) || !uuidValidate(toCustomerId)) {
    return res.status(400).json({ error: "Invalid customer IDs. Must be valid UUIDs." });
  }

  // Validate points
  if (typeof points !== 'number' || !Number.isInteger(points) || points <= 0) {
    return res.status(400).json({ error: "Points must be a positive integer." });
  }

  // Find customers
  const sender = customers.find(c => c.customerId === fromCustomerId);
  const receiver = customers.find(c => c.customerId === toCustomerId);

  if (!sender) {
    return res.status(404).json({ error: "Sender not found." });
  }
  if (!receiver) {
    return res.status(404).json({ error: "Receiver not found." });
  }

  // Check balance
  if (sender.points < points) {
    return res.status(400).json({ error: "Insufficient points." });
  }

  // Perform transfer
  sender.points -= points;
  receiver.points += points;

  res.status(200).json({
    message: "Transfer successful",
    fromCustomerId,
    toCustomerId,
    points,
    senderBalance: sender.points,
    receiverBalance: receiver.points
  });
});

module.exports = router;
