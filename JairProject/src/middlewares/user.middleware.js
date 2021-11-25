/*eslint no-unused-vars: ["error", {"args": "none"}]*/

const User = require('../models/user.model');
const expressJwt = require('express-jwt');

const superPassword = process.env.PASSWORD_MONGODB; //cambiar
const { ADMIN_NAME, ADMIN_LNAME } = process.env;

exports.JWTexp = expressJwt({
  secret: superPassword,
  algorithms: ['HS256'],
});

exports.invalidToken = async (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    await res.status(401).json({ message: '--- invalid token ---' });
  } else {
    await res.status(500).json({ message: '--- internal server error ---' });
  }
};

exports.adminToken = async (req, res, next) => {
  const { name, lastName } = req.user;
  const adminAccess = await User.findOne({ name: ADMIN_NAME, lastName: ADMIN_LNAME });

  if (adminAccess.name === name && adminAccess.lastName === lastName) {
    next();
  } else {
    res.status(403).json({ message: `You aren't the ADMIN of this app` });
  }
};
