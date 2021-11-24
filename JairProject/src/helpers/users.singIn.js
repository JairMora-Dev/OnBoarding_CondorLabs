const joi = require('joi');

const userValidation = joi.object({
  name: joi.string().min(3).max(30).required(),
  lastName: joi.string().min(3).max(30).required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  age: joi.number().integer().greater(18).less(120).required(),
  state: joi.boolean(),
  isAdmin: joi.boolean(),
});

module.exports = userValidation;
