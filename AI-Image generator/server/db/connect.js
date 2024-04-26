import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('connected to DB'))
    .catch((err) => {
      console.error('failed to connect with DB');
      console.error(err);
    });
};

export default connectDB;