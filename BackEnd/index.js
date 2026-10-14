import  express from 'express'
const app=express()
import  mongoose from 'mongoose'
import {dataBase} from './config/database.js'


import employRoute from './Routes/employes.Routes.js'

// Setting EJS
app.set('view engine' ,'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));


//Database
dataBase()

// Setting EJS
app.set('view engine' ,'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));

// Server Running
app.listen(3000,()=>{
    console.log('Server started')
})

//Routes
app.use(employRoute)