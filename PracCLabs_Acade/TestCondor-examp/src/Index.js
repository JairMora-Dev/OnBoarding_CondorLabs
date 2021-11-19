const express = require('express');
const users = require('./user.model');
const user = require('./services');
const dbConect = require('./mondodb');

const app = express();
dbConect();
const PORT = 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
  const getusers = await users.find();
  res.status(200).json(getusers);
});

app.post('/users', async (req, res) => {
  try {
    const { email, name, profession } = req.body;
    const newUser = await user.save(email, name, profession);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Listen in the PORT ${PORT}`);
});

module.exports = app;
