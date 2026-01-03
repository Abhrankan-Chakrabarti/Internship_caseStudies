// services/StripeBillingService.js
const BillingService = require('./interfaces/BillingService');

class StripeBillingService extends BillingService {
  async charge(patient, amount) {
    // Simulate Stripe API call
    console.log(`Charged $${amount} to ${patient} via Stripe`);
    return { status: "success", amount, patient };
  }
}

module.exports = StripeBillingService;
