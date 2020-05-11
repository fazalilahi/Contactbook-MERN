const express = require('express');
const router = express.Router();

// get, get logged in user, private
router.get('/', (req, res) => {
  res.send('get logged in uset');
});

// post, auth & user get token, public
router.post('/', (req, res) => {
  res.send('user login');
});

module.exports = router;
