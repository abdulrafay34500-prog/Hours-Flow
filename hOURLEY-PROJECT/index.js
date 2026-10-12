import express from 'express'
const app=express()

import router from './Routes/routes.js'

// MiddleWare
app.set('view engine' , 'ejs')
app.use(express.static('CSS-files'))


//running Server
app.listen(3000,()=>{
    console.log('Server Started Sucessfully')
})

app.use(router)