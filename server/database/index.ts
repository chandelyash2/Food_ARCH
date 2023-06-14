import mongoose from 'mongoose';

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  const mongoDBInstance = await mongoose.connect(process.env.DB_URL);
  console.log('Database Connected')

  return mongoDBInstance;
}

export default dbConnect;