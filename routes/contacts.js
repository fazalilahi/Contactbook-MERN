const express = require('express');
const router = express.Router();

// get, get all users in contact, private
router.get('/', (req, res) => {
  res.send('get all contact');
});

// post, add all contact, private
router.post('/', (req, res) => {
  res.send('add new contacts');
});

// put api/contacts/:id, update contact, private
router.put('/:id', (req, res) => {
  res.send('update contact');
});

// delete api/contacts/:id, delete contact, private
router.delete('/:id', (req, res) => {
  res.send('delete contacts');
});

module.exports = router;
