// controllers/AppointmentController.js
class AppointmentController {
  constructor(appointmentService) {
    this.appointmentService = appointmentService;
  }

  async book(req, res) {
    try {
      const { patient, time, amount } = req.body;
      const result = await this.appointmentService.bookAppointment(patient, time, amount);
      res.json(result);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  }
}

module.exports = AppointmentController;
