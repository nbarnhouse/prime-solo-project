const express = require('express');
require('dotenv').config();
const axios = require('axios');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

const router = express.Router();
const USER_AGENT = process.env.USER_AGENT;

router.get('/', rejectUnauthenticated, (req, res) => {
  const endpointURL = `https://api.weather.gov/gridpoints/TSA/42,99/forecast`;

  // GET request to the Weather.gov API
  axios
    .get(endpointURL, {
      headers: {
        'User-Agent': USER_AGENT,
      },
    })
    .then((response) => {
      // Process response data as needed
      const searchResponse = response.data.properties.periods.map((item) => {
        return {
          id: item.number,
          name: item.name,
          icon: item.icon,
          temp: item.temperature,
        };
      });

      // Limit the number of entries to 5
      const limitedResponse = searchResponse.slice(0, 5);
      res.send(limitedResponse);
    })
    .catch((err) => {
      console.log('ERROR in server /search/ GET route:', err);
      res.status(500).json({
        error: 'Internal Server Error',
      });
    });
});

module.exports = router;
