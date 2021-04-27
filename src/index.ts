import express from "express";
import { writeFile } from 'fs'

const app = express();

app.listen(5000, () => {console.log(`
    **************************
    server 5000 says, "waddup"
    **************************`)});