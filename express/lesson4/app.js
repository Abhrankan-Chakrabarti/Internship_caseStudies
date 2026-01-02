// app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const transferRouter = require('./routes/transfer');
app.use('/transfer', transferRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Express Lesson 4: Loyalty Points Transfer!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
