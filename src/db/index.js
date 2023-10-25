import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev')
    .then(() => console.log('Database Connected'))
  } catch (error) {
    console.log(`Connect failed: ${error}`);
  }
}
