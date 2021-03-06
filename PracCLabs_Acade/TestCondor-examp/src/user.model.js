const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('user', userSchema);
