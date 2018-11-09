const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get route is working...');
});

router.post('/create', (req, res) => {
  res.send(req.body);
})

module.exports = router;