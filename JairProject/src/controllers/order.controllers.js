const addDateOrder = require('../middlewares/date_FunJson');
const order = require('../models/order.model');

const users = require('../models/user.model');
const professional = require('../models/professional.model');

exports.findOrder = async (req, res) => {
  try {
    const orders = await order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.postOrder = async (req, res) => {
  const { name, lastName } = req.user;
  const finduser = await users.findOne({ name: name, lastName: lastName });

  try {
    const { doctor } = req.query;
    const findPro = await professional.findOne({ _id: doctor });
    const { address, dateOrder } = req.body;
    addDateOrder(dateOrder);

    if (address && dateOrder) {
      const newOrder = await new order({
        user: { _id: finduser._id, name: finduser.name, lastName: finduser.lastName },
        address,
        professional: { _id: findPro._id, name: findPro.name, lastName: findPro.lastName },
        dateOrder,
      });
      res.status(200).json(newOrder);
      //newOrder.save();
    } else {
      res.status(401).json({ err: `Please verify address and dateOrder in body` });
    }
  } catch (err) {
    res
      .status(401)
      .json({
        Causes_err: `1. Dont found the doctor by _id, 2.Your hour date is out of range doctors work. Please verify your date medical data!`,
      });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { _id } = req.query;
    const { name, lastName } = req.user;

    const userOrder = await order.findOne({ _id }, { user: { _id, name, lastName } });

    if (userOrder._id && userOrder.user.name === name && userOrder.user.lastName === lastName) {
      const findOrder = await order.findOneAndDelete({ _id });
      res.status(200).json({ message: `${findOrder.user.name} delete the order ${findOrder._id}` });
    } else {
      res.status(403).json({ err: `The orderId is not correct` });
    }
  } catch (err) {
    res.status(400).json({ err: `The orderId not found in your orders` });
  }
};
