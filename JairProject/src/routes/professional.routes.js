const express = require('express');
const profRoutes = express.Router();

const professional = require('../controllers/professional.controllers');
const middlew = require('../middlewares/user.middleware');

profRoutes.use('/doctors', middlew.JWTexp, middlew.invalidToken);
profRoutes.get('/doctors', professional.findProfes);

profRoutes.use('/doctor', middlew.JWTexp, middlew.invalidToken, middlew.adminToken);
profRoutes.post('/doctor', professional.postProfes);
profRoutes.put('/doctor', professional.desabProfes);

module.exports = profRoutes;