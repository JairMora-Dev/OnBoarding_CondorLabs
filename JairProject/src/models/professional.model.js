const mongodb = require('@condor-labs/mongodb')();

const professionalSchema = new mongodb.mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  specialism: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
});

const professionalModel = mongodb.mongoose.model('Professional', professionalSchema);

module.exports = professionalModel;
