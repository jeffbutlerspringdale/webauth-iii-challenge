const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config()

console.log('coming from server.js: ', process.env.JWT_SECRET);

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
    res.send("Server.js");
});
  
module.exports = server;
  