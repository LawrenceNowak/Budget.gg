const express = require('express');
const router = express.Router();

/* GET dashbaord. */
router.get('/dashboard', function(req, res, next) {
  res.render('../views/pages/dashboard', { title: 'Express' });
});

module.exports = router;
