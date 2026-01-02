// routes/contact.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    email: 'info@greenfieldcenter.org',
    phone: '555-123-4567'
  });
});

module.exports = router;
