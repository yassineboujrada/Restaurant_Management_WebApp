const express = require('express');
const router = express.Router();

// import routes
const authRoutes = require('./auth');
const dishRoutes = require('./dishRouter');
const orderRoutes = require('./ordersRouter');

// public routes
authRoutes(router);
dishRoutes(router);
orderRoutes(router);


module.exports = router;