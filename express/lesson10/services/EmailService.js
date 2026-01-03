// services/EmailService.js
const NotificationService = require('./interfaces/NotificationService');

class EmailService extends NotificationService {
  async send(to, message) {
    console.log(`Email sent to ${to}: ${message}`);
  }
}

module.exports = EmailService;
