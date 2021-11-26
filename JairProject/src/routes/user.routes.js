const express = require('express');
const userRoutes = express.Router();

const user = require('../controllers/user.controller');
const middleUser = require('../middlewares/user.middleware');

userRoutes.use('/users', middleUser.JWTexp, middleUser.invalidToken, middleUser.adminToken);
userRoutes.get('/users', user.find);

userRoutes.use('/user/singin', middleUser.noRepeatUser);
userRoutes.post('/user/singin', user.singIn);

userRoutes.post('/user/login', user.logIn);

module.exports = userRoutes;
