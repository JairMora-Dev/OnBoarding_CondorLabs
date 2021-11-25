const joi = require('joi');

const orderValidate = joi.object({
  user: joi.array(),
  address: joi.string().required(),
  professional: joi.array(),
  dateOrder: joi.string(),
  state: joi.string().required(),
});

module.exports = orderValidate;
