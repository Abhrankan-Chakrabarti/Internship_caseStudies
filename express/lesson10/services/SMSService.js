// services/SMSService.js
const NotificationService = require('./interfaces/NotificationService');

class SMSService extends NotificationService {
  async send(to, message) {
    console.log(`SMS sent to ${to}: ${message}`);
  }
}

module.exports = SMSService;
