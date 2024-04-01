const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const availabilityRouter = require('./routes/availability.router');
const requestRouter = require('./routes/requests.router');
const weatherRouter = require('./routes/weather.router');
const filterRouter = require('./routes/filters.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/availability', availabilityRouter);
app.use('/api/request', requestRouter);
app.use('/api/filter', filterRouter);
app.use('/api/weather', weatherRouter);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
