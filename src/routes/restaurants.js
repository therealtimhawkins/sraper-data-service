const express = require('express');
const router = express.Router();
const model = require('../models/restaurants');

router.get('/', async (req, res) => {
  const restaurants = await model.getRestaurants();
  res.send(restaurants);
});

router.post('/create', async (req, res) => {
  const restaurant = await model.postRestaurant(req.body);
  res.send(restaurant);
})

module.exports = router;