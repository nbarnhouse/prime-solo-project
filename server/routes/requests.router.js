const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route for all requests
router.get('/', (req, res) => {
  pool
    .query(`SELECT * from "requests";`)
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
  let queryText = `INSERT INTO "requests" ("request_start_date", "request_end_date", "reason", "admin_notes", "sub_notes") 
  VALUES ($1, $2, $3, $4, $5);`;

  const queryArgs = [
    newReq.request_start_date,
    newReq.request_end_date,
    newReq.reason,
    newReq.admin_notes,
    newReq.sub_notes,
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

// router.post('/', rejectUnauthenticated, (req, res) => {
//   const newReq = req.body;
//   const userId = req.user.id; // Get the user ID from the authenticated user

//   // Step 1: Retrieve Teacher ID from the logged-in user's information
//   const queryText = `SELECT teacher_id FROM "teacher" WHERE user_id = $1`;
//   const queryValues = [userId];

//   pool
//     .query(queryText, queryValues)
//     .then((result) => {
//       if (result.rows.length === 0) {
//         throw new Error('Teacher ID not found for the user');
//       }

//       const teacherId = result.rows[0].teacher_id;

//       // Validate the request body
//       if (
//         !newReq.request_start_date ||
//         !newReq.request_end_date ||
//         !newReq.reason
//       ) {
//         return res.status(400).json({ error: 'Missing required fields' });
//       }

//       const insertQueryText = `
//         INSERT INTO "requests" ("request_start_date", "request_end_date", "reason", "admin_notes", "sub_notes", "teacher_id")
//         VALUES ($1, $2, $3, $4, $5, $6);
//       `;

//       const insertQueryArgs = [
//         newReq.request_start_date,
//         newReq.request_end_date,
//         newReq.reason,
//         newReq.admin_notes || null,
//         newReq.sub_notes || null,
//         teacherId,
//       ];

//       // Step 2: Insert the request into the database with the retrieved teacher ID
//       return pool.query(insertQueryText, insertQueryArgs);
//     })
//     .then(() => {
//       res.status(201).json({ success: true });
//     })
//     .catch((error) => {
//       console.error('Error on POST Request Object', error);
//       res.status(500).json({ error: 'Internal server error' });
//     });
// });
