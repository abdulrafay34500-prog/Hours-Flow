import mongoose from 'mongoose'
import 'dotenv/config';

export async function dataBase() {
   await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log('DataBase connected')})
    .catch((error) => {
      console.log('Database connection failed:', error.message);
    });
}
