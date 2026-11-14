import mongoose from 'mongoose';
import 'dotenv/config';

export async function dataBase() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected');
    } catch (error) {
        console.log('Database connection failed:', error.message);
        throw error;
    }
}