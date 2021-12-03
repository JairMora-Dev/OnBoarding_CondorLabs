const user = require('../models/user.model');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const userValidate = require('../helpers/users.singIn');
const logInValidate = require('../helpers/users.logIn');

const superPassword = process.env.PASSWORD_MONGODB;

exports.find = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch {
    res.status(500).json({ err: `server error` });
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

exports.logIn = async (req, res) => {
  try {
    const { name, lastName, password } = await logInValidate.validateAsync(req.body);

    const { password: userPassword, isAdmin } = await user.findOne({ name: name, lastName: lastName });

    const responseLogIn = bcrypt.compareSync(password, userPassword);
    if (responseLogIn) {
      const token = jsonwebtoken.sign(
        {
          name,
          lastName,
          isAdmin,
        },
        superPassword
      );
      res.status(200).json({ token: `${token}` });
    }
  } catch (err) {
    res.status(401).json({ err: `Please first register in our system` });
  }
};
