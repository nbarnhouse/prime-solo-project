const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
  // eslint-disable-next-line no-undef
} = require('../modules/authentication-middleware');

//GET route ALL
// router.get('/', rejectUnauthenticated, (req, res) => {
//   pool
//     .query(
//       `SELECT *
//     FROM "substitute_availability"
//     ORDER BY "id";`
//     )
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log('Error on GET Availability Object', error);
//       res.sendStatus(500);
//     });
// });

//GET route for specific User
router.get('/', rejectUnauthenticated, (req, res) => {
  pool
    .query(`SELECT * FROM "substitute_availability" WHERE user_id = $1;`, [
      req.user.id,
    ])
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => {
      console.error('Error fetching accepted requests:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

//POST route
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('POST req.body', req.body);
  const newAvb = req.body;
  let queryText = `INSERT INTO "substitute_availability" ("date", "day", "type", "comments", "user_id") 
  VALUES ($1, $2, $3, $4, $5);`;

  const queryArgs = [
    newAvb.date,
    newAvb.day,
    newAvb.type,
    newAvb.comments,
    newAvb.user_id,
  ];

  pool
    .query(queryText, rejectUnauthenticated, queryArgs)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error on POST Request Object', error);
      res.sendStatus(500);
    });
});

//Delete route
router.delete('/:id', rejectUnauthenticated, (req, res) => {
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
