import { Request, Response } from 'express';
const router = require('express').Router();
// const authenticateRequest = require('../middleware/authenticateRequest');
// const handleUserData = require('../middleware/handleUserData');
// const handleUpdateUser = require('../middleware/handleUpdateUser');
// const Users = require('../model/usersModel');


// check router connection 
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: `this is where we will interact with users route.`})
});