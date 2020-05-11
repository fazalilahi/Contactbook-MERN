const express = require('express');
const router = express.Router();

// post, register a user, public
router.post('/', (req, res) => {
  res.send('registering user');
});

module.exports = router;
