const mongodb = require('@condor-labs/mongodb')();

const userSchema = new mongodb.mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongodb.mongoose.model('User', userSchema);

module.exports = userModel;
