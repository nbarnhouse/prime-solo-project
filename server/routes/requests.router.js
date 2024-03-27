const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route for all requests
router.get('/', (req, res) => {
  pool
    .query('SELECT * FROM "requests";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error on GET Request Object', error);
      res.sendStatus(500);
    });
});

//GET route (filter for subs by ID)
router.get('/:id', (req, res) => {
  pool
    .query('SELECT * FROM "requests" WHERE "id" = $1;', [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error on GET Request Object', error);
      res.sendStatus(500);
    });
});

//POST route
router.post('/', (req, res) => {
  console.log('POST req.body', req.body);
  const newReq = req.body;
  let queryText = `INSERT INTO "requests" ("request_start_date", "request_end_date", "support", "comments") 
  VALUES ($1, $2, $3, $4);`;

  const queryArgs = [
    newReq.request_start_date,
    newReq.request_end_date,
    newReq.support,
    newReq.comments,
  ];

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

//PUT route
router.put('/:id', (req, res) => {
  pool
    .query(`UPDATE "requests" SET "status" = 'accepted' WHERE "id" = $1;`, [
      req.params.id,
    ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

//DELETE route
router.delete('/:id', (req, res) => {
  pool
    .query('DELETE FROM "requests" WHERE id=$1', [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error on DELETE Request Object', error);
      res.sendStatus(500);
    });
});

module.exports = router;
