// services/AppointmentService.js
class AppointmentService {
  constructor(notificationService, billingService) {
    this.notificationService = notificationService;
    this.billingService = billingService;
  }

  async bookAppointment(patient, time, amount) {
    // Charge patient
    await this.billingService.charge(patient, amount);

    // Send notification
    await this.notificationService.send(
      patient,
      `Your appointment is booked for ${time}`
    );

    return { status: "confirmed", patient, time, amount };
  }
}

module.exports = AppointmentService;
