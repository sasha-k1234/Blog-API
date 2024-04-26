const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user');
const passport = require('passport');
const User = require('../models/user');

userRouter.get('/registration',userController.getReg);

userRouter.post('/registration',userController.postReg);

userRouter.get('/login',userController.getLogin);

userRouter.post('/login',userController.postLogin);

//test route strategy testing
userRouter.get('/test',passport.authenticate('jwt',{session:false}),userController.testRoute);

module.exports = userRouter;