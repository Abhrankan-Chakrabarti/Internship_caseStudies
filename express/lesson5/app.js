// app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import BakingController
const bakingRouter = require('./routes/baking');
app.use('/baking', bakingRouter);

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to Express Lesson 5: BakingController demo!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
