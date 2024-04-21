const express = require('express');
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use('/public',express.static(path.join(__dirname,'public')));

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error",console.error.bind(console,"mongoose connection error:"));
db.once("open",()=>{
    console.log('DB connected');
});

app.listen(3000);