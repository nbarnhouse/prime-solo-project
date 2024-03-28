const express = require('express');
const {
  rejectUnauthenticated,
  // eslint-disable-next-line no-undef
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

//GET route for all users
router.get('/register', (req, res) => {
  pool
    .query('SELECT * FROM "user";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error on GET Users', error);
      res.sendStatus(500);
    });
});

//POST route for user registration
router.post('/register', (req, res, next) => {
  const firstname = req.body.first_name;
  const lastname = req.body.last_name;
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (first_name, last_name, username, password)
    VALUES ($1, $2, $3, $4) RETURNING id`;
  pool
    .query(queryText, [firstname, lastname, username, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  console.log('Hit login post');
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

// //PUT route to update role
// router.put('/:id', (req, res) => {
//   pool
//     .query(`UPDATE "user" SET "role" = 'substitute' WHERE "id" = $1;`, [
//       req.params.id,
//     ])
//     .then((response) => {
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
