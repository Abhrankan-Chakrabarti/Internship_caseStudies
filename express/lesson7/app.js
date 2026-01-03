// app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Applications routes
const applicationsRouter = require('./routes/applications');
app.use('/applications', applicationsRouter);

// Homepage
app.get('/', (req, res) => {
  res.send('Welcome to Express Lesson 7: Admissions validation rules');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
