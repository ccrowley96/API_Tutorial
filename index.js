//Import express framework
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const API = require('./api/index.js');


const STATIC_PATH = path.join(__dirname, './public');

// Initialize the express app
const app = express();

// Correctly parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Listen at API endpoint
app.use('/api', API);

// Server static files
app.use(express.static(STATIC_PATH));


// Start server listening
app.listen(3000, () => {
  console.log("Server started on port: 3000");
});
