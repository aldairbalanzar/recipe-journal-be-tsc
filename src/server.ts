
require('dotenv').config();
import express from 'express';
const server = express();

const apiRouter = require('./routes/apiRouter');
// const cors = require('cors');
const helmet = require('helmet');
const fileupload = require('express-fileupload');
const accessControl = require('./utils/accessControl');

server.use(fileupload({ useTempFiles: true }));
server.use(helmet());
// server.use(cors());
server.use(express.json());
server.use(accessControl);

server.get('/', (req, res) => {
    res.status(200).json({ message: `hey! you've reached the '/' endpoint.`})
});

// routes all requests to appropriate endpoints
server.use('/api', apiRouter);

export default  server;