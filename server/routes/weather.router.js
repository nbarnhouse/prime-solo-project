const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

const USER_AGENT = process.env.USER_AGENT;
// console.log('User Agent(API KEY):', USER_AGENT);

router.get('/', (req, res) => {
  // const { searchTerm, pageLimit } = req.body;
  console.log('SearchTerm:', searchTerm);
  const endpointURL = `https://api.weather.gov/gridpoints/TSA/42,99/forecast`;
  console.log('Endpoint URL:', endpointURL);
  axios
    .get(endpointURL)
    .then((response) => {
      // package response
      const searchResponse = response.data.data.map((item) => {
        return {
          id: item.id,
          name: item.name,
        };
      });
      res.send(searchResponse);
    })
    .catch((err) => {
      console.log('ERROR in server /search/ POST ROUTE:', err);
      res.sendStatus(500);
    });
});

module.exports = router;
