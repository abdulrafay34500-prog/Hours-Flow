import mongoose from 'mongoose'

export function dataBase() {
    mongoose.connect('mongodb://127.0.0.1:27017/Office')
    .then(()=>{console.log('DataBase connected')})
}