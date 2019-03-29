const express = require('express');
const server = express();
// Routes
const projects = require('./routes/projects.js');
const actions = require('./routes/actions.js');
server.use(express.json());

server.use('/api/projects', projects)
server.use('/api/actions', actions)

module.exports = server;

