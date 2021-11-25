const mongodb = require('@condor-labs/mongodb')();

const orderSchema = mongodb.mongoose.Schema({
  user: {
    type: Array,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  professional: {
    type: Array,
    required: true,
  },
  dateOrder: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    enum: {
      values: ['in_Progress', 'with_condorian', 'finish'],
      message: '{VALUE} is not supported',
    },
    default: 'in_Progress',
  },
});

const orderModel = mongodb.mongoose.model('Order', orderSchema);

module.exports = orderModel;
