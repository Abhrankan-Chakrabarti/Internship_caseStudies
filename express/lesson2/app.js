// app.js
const express = require('express');
const app = express();
const port = 3000;

// Import routers
const eventsRouter = require('./routes/events');
const classesRouter = require('./routes/classes');
const contactRouter = require('./routes/contact');

// Middleware
app.use(express.json());

// Mount routers
app.use('/events', eventsRouter);
app.use('/classes', classesRouter);
app.use('/contact', contactRouter);

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to Greenfield Community Center!');
});

// Start server
app.listen(port, () => {
  console.log(`Community Center server running at http://localhost:${port}`);
});
