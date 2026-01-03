// app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import discharge router
const dischargeRouter = require('./routes/discharge');
app.use('/discharge', dischargeRouter);

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to Express Lesson 6: Discharge workflow with insurance middleware!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
