const joi = require('joi');

const logInValidation = joi.object({
  name: joi.string().min(3).max(30).required(),
  lastName: joi.string().min(3).max(30).required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

module.exports = logInValidation;
