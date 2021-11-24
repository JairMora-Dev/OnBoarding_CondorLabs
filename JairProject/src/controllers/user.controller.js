const user = require('../models/user.model');
const bcrypt = require('bcrypt');
const userValidate = require('../helpers/users.singIn');

exports.find = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.singIn = async (req, res) => {
  try {
    const { name, lastName, password, age } = await userValidate.validateAsync(req.body);

    const newUser = await new user({
      name,
      lastName,
      password: bcrypt.hashSync(password, 10),
      age,
    });
    newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
};
