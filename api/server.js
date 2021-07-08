const express = require('express');
const { logger } = require('./middleware/middleware');
const server = express();
const usersRouter = require('./users/users-router');

server.use(express.json()) // express method to recognize incoming req obj as json object

server.use(logger)

server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
