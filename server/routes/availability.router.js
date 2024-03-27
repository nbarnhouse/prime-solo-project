const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route
router.get('/', (req, res) => {
  pool
    .query('SELECT * FROM "substitute_availability";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error on GET Availability Object', error);
      res.sendStatus(500);
    });
});

//POST route
router.post('/', (req, res) => {
  console.log('POST req.body', req.body);
  const newAvb = req.body;
  let queryText = `INSERT INTO "substitute_availability" ("date", "day", "type", "user_id") 
  VALUES ($1, $2, $3, $4);`;

  const queryArgs = [newAvb.date, newAvb.day, newAvb.type, newAvb.user_id];

  pool
    .query(queryText, queryArgs)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error on POST Request Object', error);
      res.sendStatus(500);
    });
});

//Delete route
router.delete('/:id', (req, res) => {
  pool
    .query('DELETE FROM "substitute_availability" WHERE id=$1', [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error on DELETE Availabilty Object', error);
      res.sendStatus(500);
    });
});

module.exports = router;
