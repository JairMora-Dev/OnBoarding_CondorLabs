const user = require('../src/user.model');

const save = (email, name, profession) => {
  const newUser = new user({ email, name, profession });
  return newUser.save();
};

module.exports = { save };
