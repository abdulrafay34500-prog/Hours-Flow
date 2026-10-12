import express, { response } from 'express'
const router=express.Router()

import {MAinPAgeFun} from '../controler/mainEmployPageFUN.js'
import {AddingEmployFun} from '../controler/addingEmployFun.js'
import {singleEmployFUN} from '../controler/singleEmployFUN.js'



router.get('/',MAinPAgeFun)

router.post('/addemployPage',AddingEmployFun)

router.get('/addemployPage',(req,res)=>{
    res.render('addemployPage')
})

router.get('/SingleEmployPage/:id',singleEmployFUN)

router.get('/weekleyReport',(req,res)=>{
    res.render('weekleyReport')
})

export default router

