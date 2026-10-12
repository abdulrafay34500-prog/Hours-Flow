import express, { response } from 'express'
const router=express.Router()

import {MAinPAgeFun} from '../controler/mainEmployPageFUN.js'

router.get('/',MAinPAgeFun)

router.get('/weekleyReport',(req,res)=>{
    res.render('weekleyReport')
})
router.get('/addemployPage',(req,res)=>{
    res.render('addemployPage')
})

export default router