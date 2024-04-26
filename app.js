const express = require("express");
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const passport = require('passport');
const userRouter = require('./routes/user');

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//passport config in use
require('./config/passport')(passport);
app.use(passport.initialize());

app.use(express.static("public"));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use('/user',userRouter);


const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongoose connection error:"));

app.listen(3000);
