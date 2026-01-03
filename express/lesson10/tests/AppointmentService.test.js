// tests/AppointmentService.test.js
const AppointmentService = require('../services/AppointmentService');
const BillingService = require('../services/interfaces/BillingService');
const NotificationService = require('../services/interfaces/NotificationService');

class MockBilling extends BillingService {
  constructor() {
    super();
    this.charges = [];
  }
  async charge(patient, amount) {
    this.charges.push({ patient, amount });
  }
}

class MockNotifier extends NotificationService {
  constructor() {
    super();
    this.messages = [];
  }
  async send(to, message) {
    this.messages.push({ to, message });
  }
}

test("should charge patient and send notification on booking", async () => {
  const mockBilling = new MockBilling();
  const mockNotifier = new MockNotifier();
  const service = new AppointmentService(mockNotifier, mockBilling);

  await service.bookAppointment("bob@example.com", "Tuesday 2pm", 75);

  expect(mockBilling.charges).toContainEqual({ patient: "bob@example.com", amount: 75 });
  expect(mockNotifier.messages).toContainEqual({
    to: "bob@example.com",
    message: "Your appointment is booked for Tuesday 2pm"
  });
});
