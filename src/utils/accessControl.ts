import { NextFunction, Request, Response } from "express";

function access_control_middleware(req: Request, res: Response , next: NextFunction) {
    res.header("Access-Control-Allow-Origin",  '*');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Credentials");
    next(); 
}

module.exports = access_control_middleware