import express, { response } from 'express'
const router=express.Router()

import {MAinPAgeFun} from '../controler/mainEmployPageFUN.js'
import {AddingEmployPostFun ,AddingEmployGetFun} from '../controler/addingEmployFun.js'
import {singleEmployFUN} from '../controler/singleEmployFUN.js'
import {updateEmployPostFun ,updateEmployGetFun} from '../controler/updateEmployFUN.js'
import {deleteEmployPostFun } from '../controler/deleteEmployFUN.js'



router.get('/',MAinPAgeFun)

router.post('/addemployPage',AddingEmployPostFun)

router.get('/addemployPage',AddingEmployGetFun)

router.get('/SingleEmployPage/:id',singleEmployFUN)

router.get('/updateEmployPage/:id',updateEmployGetFun)

router.post('/updateEmployPagePost/:id',updateEmployPostFun)

router.get('/deleteEmploy/:id',deleteEmployPostFun)



router.get('/weekleyReport',(req,res)=>{
    res.render('weekleyReport')
})

export default router

