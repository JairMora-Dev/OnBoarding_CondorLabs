const express = require('express');
const orderRoutes = express.Router();

const order = require('../controllers/order.controllers');
const middleUser = require('../middlewares/user.middleware');

orderRoutes.use('/orders', middleUser.JWTexp, middleUser.invalidToken, middleUser.adminToken);
orderRoutes.use('/order', middleUser.JWTexp, middleUser.invalidToken);

orderRoutes.get('/orders', order.findOrder);

module.exports = orderRoutes;
