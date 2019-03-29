const express = require('express');
const server = express();
// Routes


server.use(express.json());

//server.use('route', dishesR)
//server.use('route', recipesRo)

module.exports = server;

