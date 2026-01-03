// routes/discharge.js
const express = require('express');
const router = express.Router();

// Middleware: log each discharge request
function logDischargeRequest(req, res, next) {
  req.dischargeLog = req.dischargeLog || [];
  req.dischargeLog.push({ step: "requestReceived", time: new Date().toISOString() });
  next();
}

// Middleware: doctor sign-off
function doctorSignoffCheck(req, res, next) {
  if (!req.body.doctorSigned) {
    return res.status(400).json({ error: "Doctor sign-off required before discharge." });
  }
  req.dischargeLog.push({ step: "doctorSignoff", time: new Date().toISOString() });
  next();
}

// Middleware: pharmacy review
function pharmacyReview(req, res, next) {
  if (!req.body.pharmacyChecked) {
    return res.status(400).json({ error: "Pharmacy review required before discharge." });
  }
  req.dischargeLog.push({ step: "pharmacyReview", time: new Date().toISOString() });
  next();
}

// Middleware: follow-up scheduling
function followupCheck(req, res, next) {
  if (!req.body.followupScheduled) {
    return res.status(400).json({ error: "Follow-up appointment must be scheduled." });
  }
  req.dischargeLog.push({ step: "followupCheck", time: new Date().toISOString() });
  next();
}

// NEW Middleware: insurance approval
function insuranceApprovalCheck(req, res, next) {
  if (!req.body.insuranceApproved) {
    return res.status(403).json({ error: "Insurance approval required before discharge." });
  }
  req.dischargeLog.push({ step: "insuranceApproval", time: new Date().toISOString() });
  next();
}

// Centralized error handler
function errorHandler(err, req, res, next) {
  console.error("Discharge log:", req.dischargeLog);
  res.status(500).json({ error: err.message || "Internal server error" });
}

// POST /discharge endpoint
router.post(
  '/',
  logDischargeRequest,
  doctorSignoffCheck,
  pharmacyReview,
  followupCheck,
  insuranceApprovalCheck,
  (req, res) => {
    req.dischargeLog.push({ step: "dischargeComplete", time: new Date().toISOString() });
    res.json({
      status: "Discharge complete",
      patient: req.body.patientName,
      log: req.dischargeLog,
    });
  }
);

// Attach error handler
router.use(errorHandler);

module.exports = router;
