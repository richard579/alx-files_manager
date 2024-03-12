// import the required modules
const express = require('express');
const bodyParser = require('body-parser');

// import the routes
const routes = require('./routes/index');

// create the Express app
const app = express();

// parse JSON requests
app.use(bodyParser.json());

// load all routes from the file routes/index.js
app.use('/', routes);

// define the port to listen on
const port = process.env.PORT || 5000;

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
