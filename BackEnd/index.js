import  express from 'express'
const app=express()
import  mongoose from 'mongoose'
import {dataBase} from './config/database.js'
import cors from 'cors';


import employRoute from './Routes/employes.Routes.js'

// Setting EJS
app.set('view engine' ,'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors());

//Routes
app.use('/api/employes' , employRoute)


// Server Running

const startingServer= async ()=>{
    try{
       await dataBase()
       app.listen(3000,()=>{
            console.log('Server started')
        })
    }catch(err){
        console.error('Failed to connect to database:', error.message);
    }
}
startingServer()

