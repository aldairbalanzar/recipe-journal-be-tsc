import { Request, Response } from 'express';
const router = require('express').Router();
const jwt = require('jsonwebtoken');
// const secrets = require('../secrets')
// const Users = require('../model/usersModel');
// const handleUserData = require('../middleware/handleUserData');
// const hashPassword = require('../middleware/hashPassword');

// check router connection 
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: `this is where steps will be fetched from.`})
});

module.exports = router;