import mongoose from 'mongoose';

export async function dbConnect() {
  try {
    await mongoose.connect('mongodb://localhost/mongowithgraphql', {
      useNewUrlParser: true,
    });
    console.log('>>> DB is connected in mongo server <<<');
  } catch (err) {
    console.log('Something goes wrong with db connection');
    console.log(err);
  }
}
