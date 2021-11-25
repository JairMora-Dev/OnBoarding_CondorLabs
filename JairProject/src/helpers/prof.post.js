const joi = require('joi');

const proValidate = joi.object({
  name: joi.string().min(3).max(30).required(),
  lastName: joi.string().min(3).max(30).required(),
  specialism: joi.string().min(3).max(30).required(),
  state: joi.boolean(),
  availability: joi.boolean(),
});

module.exports = proValidate;
