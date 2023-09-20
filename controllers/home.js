

const express = require('express');
const router = express.Router();           // TO Collect all the route 

const user = require('../models/user');

//Mock user Data

const users = [
    new user(1,'Alice','alice@example.com'),
    new user(2,'Bob','bob@example.com')
];

// Controller for the home page
router.get('/', (req, res) => {
    // Build the HTML response directly
    let htmlResponse = '<html><head><title>User List</title><link rel="stylesheet" href="/style.css"></head><body>';
    htmlResponse += '<h1>User List</h1>';
    htmlResponse += '<ul>';
    users.forEach(user => {
      htmlResponse += `<li>${user.name} (${user.email})</li>`;
    });
    htmlResponse += '</ul>';
    htmlResponse += '</body></html>';
  
    // Send the HTML response
    res.send(htmlResponse);
  });
  
  module.exports = router;