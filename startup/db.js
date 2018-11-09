const mongoose = require('mongoose');

module.exports = function() {
  const mongoUrl = 'mongodb://testuser:testuser1@ds024548.mlab.com:24548/scraper-data-service';
  mongoose.connect(mongoUrl)
    .then(() => console.log(`Connected to ${mongoUrl}...`))
    .catch(() => console.log('Connection to MongoDB failed...'));
}