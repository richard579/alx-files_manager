// import the required modules
const express = require('express');

// import the controllers
const AppController = require('../controllers/AppController');
const UsersController = require('../controllers/UsersController');
const AuthController = require('../controllers/AuthController');

// create the router
const router = express.Router();

// define the routes
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getStats);
router.get('/users/me ', UsersController.getStats);
// define the route for creating a new user
router.post('/users', UsersController.postNew);

// export the router
module.exports = router;
