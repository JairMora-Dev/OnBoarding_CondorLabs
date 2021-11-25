//const orderValidate = require('../helpers/order');
const order = require('../models/order.model');

exports.findOrder = async (req, res) => {
  try {
    const orders = await order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(404).json(err);
  }
};
