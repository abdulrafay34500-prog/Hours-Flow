import  express from 'express'
const app=express()
import  mongoose from 'mongoose'
import {dataBase} from './config/database.js'
import cors from 'cors';
import 'dotenv/config'


import employRoute from './Routes/employes.Routes.js'
import TimeSheetRoute from './Routes/timeSheet.routs.js'
import usersRoute from './Routes/userRoute.js'

// Setting EJS
app.set('view engine' ,'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true
}));


//Routes
app.use('/api/employes' , employRoute)
app.use('/api/timeSheet', TimeSheetRoute)
app.use('/api/user' , usersRoute )


// Server Running

let port=process.env.PORT


const startingServer= async ()=>{
    try{
       await dataBase()
       app.listen(port ,()=>{
            console.log(`Server running on ${port}`)
        })
    }catch(err){
        console.error('Failed to connect to database:', err.message);
    }
}
startingServer()

  
