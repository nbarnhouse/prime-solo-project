const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
  // eslint-disable-next-line no-undef
} = require('../modules/authentication-middleware');

//GET route for specific substitute limit of One
router.get('/accepted', rejectUnauthenticated, (req, res) => {
  pool
    .query(
      `SELECT *
      FROM requests
      WHERE status = 'Accepted'
        AND request_start_date > CURRENT_DATE
        AND user_id = $1
        LIMIT 1;`,
      [req.user.id]
    )
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => {
      console.error('Error fetching accepted requests:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

//GET route for specific teacher limit of One
router.get('/submitted', rejectUnauthenticated, (req, res) => {
  pool
    .query(
      `SELECT *
      FROM requests
      WHERE status = 'Requested'
        AND request_start_date > CURRENT_DATE
        AND teacher_id = $1
        LIMIT 1;`,
      [req.user.id]
    )
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => {
      console.error('Error fetching submitted requests:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
