const express = require('express');
const orderRoutes = express.Router();

const order = require('../controllers/order.controller');
const middleUser = require('../middlewares/user.middleware');

orderRoutes.use('/orders', middleUser.JWTexp, middleUser.invalidToken, middleUser.adminToken);
orderRoutes.get('/orders', order.findOrder);

orderRoutes.use('/order', middleUser.JWTexp, middleUser.invalidToken);
orderRoutes.post('/order', order.postOrder);
orderRoutes.delete('/order', order.deleteOrder);

module.exports = orderRoutes;
