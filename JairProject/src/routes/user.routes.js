const express = require('express');
const userRoutes = express.Router();

const user = require('../controllers/user.controller');

userRoutes.get('/', user.find);
userRoutes.post('/', user.singIn);

module.exports = userRoutes;
