const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

const USER_AGENT = process.env.USER_AGENT;

router.get('/', (req, res) => {
  const endpointURL = `https://api.weather.gov/gridpoints/TSA/42,99/forecast`;

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

      // Limit the number of entries to 10
      const limitedResponse = searchResponse.slice(0, 5);
      res.send(limitedResponse);
    })
    .catch((err) => {
      console.log('ERROR in server /search/ GET route:', err);
      // Send back a meaningful error response
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

module.exports = router;
