const express = require('express');
const router = express.Router();

router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

module.exports = router;

