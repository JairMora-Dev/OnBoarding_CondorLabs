const user = require('../models/user.model');
const bcrypt = require('bcrypt');

const { ADMIN_PWORD, ADMIN_NAME, ADMIN_LNAME } = process.env;

async function Admin() {
  const adminexist = await user.findOne({ name: ADMIN_NAME, lastName: ADMIN_LNAME });

  if (!adminexist) {
    const adminUser = await new user({
      name: ADMIN_NAME,
      lastName: ADMIN_LNAME,
      password: bcrypt.hashSync(ADMIN_PWORD, 10),
      age: 26,
      state: true,
      isAdmin: true,
    });
    adminUser.save();
  } else {
    return 0;
  }
}

module.exports = Admin;
