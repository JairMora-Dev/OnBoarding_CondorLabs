const mongoose = require('mongoose');

async function dbConect() {
  try {
    await mongoose.connect('mongodb://localhost/condorLabsTest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('>> DB mongoo connected');
  } catch (error) {
    console.log('>>Something goes wrong wyiht connection to DB');
    console.log(error);
  }
}

module.exports = dbConect;
