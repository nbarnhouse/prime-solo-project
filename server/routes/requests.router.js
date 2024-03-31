const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
  // eslint-disable-next-line no-undef
} = require('../modules/authentication-middleware');

// GET route for all requests
router.get('/', rejectUnauthenticated, (req, res) => {
  pool
    .query(
      `SELECT requests.id, requests.request_start_date, requests.request_end_date, EXTRACT(DOW FROM requests.request_start_date) AS day_of_week, requests.school, "user".first_name, "user".last_name, "teacher".grade FROM "requests"
      JOIN "teacher" ON requests.teacher_id = "teacher".id
      JOIN "user" ON "teacher".user_id = "user".id
      WHERE "status" = 'Requested'
      ORDER BY requests.request_start_date;`
    )
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error('Error on GET Request Object', error);
      res.sendStatus(500);
    });
});

//GET route for specific substitute
router.get('/accepted', rejectUnauthenticated, (req, res) => {
  pool
    .query(
      `SELECT * FROM "requests" WHERE "status" = 'Accepted' AND "user_id" = $1;`,
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

//GET route for specific teacher
router.get('/submitted', rejectUnauthenticated, (req, res) => {
  pool
    .query(
      `SELECT * FROM "requests" WHERE "status" = 'Requested' AND "teacher_id" = $1;`,
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

// POST route
router.post('/', rejectUnauthenticated, (req, res) => {
  const newReq = req.body;
  const {
    request_start_date,
    request_end_date,
    reason,
    admin_notes,
    sub_notes,
  } = newReq;
  const queryText = `
    INSERT INTO "requests" ("request_start_date", "request_end_date", "reason", "admin_notes", "sub_notes")
    VALUES ($1, $2, $3, $4, $5)
  `;
  const queryValues = [
    request_start_date,
    request_end_date,
    reason,
    admin_notes,
    sub_notes,
  ];

  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error on POST Request Object', error);
      res.sendStatus(500);
    });
});

// PUT route
router.put('/:id', rejectUnauthenticated, (req, res) => {
  const requestId = req.params.id;
  const { user_id } = req.body;

  pool
    .query(
      `UPDATE "requests" SET "status" = 'Accepted', "user_id" = $1 WHERE "id" = $2`,
      [user_id, requestId]
    )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error on PUT Request Object', error);
      res.sendStatus(500);
    });
});

// DELETE route
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  pool
    .query('DELETE FROM "requests" WHERE id=$1', [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error on DELETE Request Object', error);
      res.sendStatus(500);
    });
});

module.exports = router;
