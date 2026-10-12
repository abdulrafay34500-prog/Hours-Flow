import mongoose from 'mongoose'
import express from 'express'

const app=express()

import router from './Routes/routes.js'

// MiddleWare
app.set('view engine' , 'ejs')
app.use(express.static('CSS-files'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//running Server
app.listen(3000,()=>{
    console.log('Server Started Sucessfully')
})

// Running Routes
app.use(router)

// Running DataBase
mongoose.connect('mongodb://127.0.0.1:27017/Office')
.then(()=>{console.log('Database Connected')})