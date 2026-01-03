// routes/applications.js
const express = require('express');
const router = express.Router();

// Utility: URL validation
function isValidUrl(url) {
  try {
    const u = new URL(url);
    // Optional: ensure http/https only
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

// Middleware: validate portfolioLink for art applicants
function validateArtPortfolio(req, res, next) {
  const { applicantType, portfolioLink } = req.body;

  if (applicantType && applicantType.toLowerCase() === 'art') {
    if (!portfolioLink || !isValidUrl(portfolioLink)) {
      return res
        .status(400)
        .json({ error: 'A valid portfolio link is required for art applicants.' });
    }
  }

  next();
}

// Example: additional minimal validations (optional)
// Feel free to extend with your standard validation style.
function validateBasicFields(req, res, next) {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Applicant name and email are required.' });
  }
  next();
}

// POST /applications → submit application
router.post('/', validateBasicFields, validateArtPortfolio, (req, res) => {
  const { name, email, applicantType, portfolioLink } = req.body;

  // Simulate persisted application payload
  const application = {
    id: Date.now().toString(),
    name,
    email,
    applicantType: applicantType || 'general',
    portfolioLink: portfolioLink || null,
    status: 'received'
  };

  res.status(201).json({
    message: 'Application received',
    application
  });
});

module.exports = router;
