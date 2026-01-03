// app.js
const express = require('express');
const SMSService = require('./services/SMSService');
const StripeBillingService = require('./services/StripeBillingService');
const AppointmentService = require('./services/AppointmentService');
const AppointmentController = require('./controllers/AppointmentController');

const app = express();
app.use(express.json());

// Dependency injection
const notificationService = new SMSService();
const billingService = new StripeBillingService();
const appointmentService = new AppointmentService(notificationService, billingService);
const appointmentController = new AppointmentController(appointmentService);

// Routes
app.post('/appointments/book', (req, res) => appointmentController.book(req, res));

const port = 3000;
app.listen(port, () => {
  console.log(`Lesson 10 server running on port ${port}`);
});
