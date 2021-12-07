const express = require('express');
const professionalRoutes = express.Router();

const professional = require('../controllers/professional.controller');
const middlew = require('../middlewares/user.middleware');

professionalRoutes.use('/doctors', middlew.JWTexp, middlew.invalidToken);
professionalRoutes.get('/doctors', professional.find);

professionalRoutes.use('/doctor', middlew.JWTexp, middlew.invalidToken, middlew.adminToken);
professionalRoutes.post('/doctor', professional.postProfes);
professionalRoutes.delete('/doctor', professional.desabProfes);

module.exports = professionalRoutes;
