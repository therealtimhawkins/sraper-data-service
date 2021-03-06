const express = require('express');
const app = express();
const port = 2999;
const restaurantsRoutes = require('./src/routes/restaurants');

require('./src/startup/db')();

app.use(express.json());
app.use('/api/restaurants', restaurantsRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send(`scraper-data-service is running on port ${port}`);
});
