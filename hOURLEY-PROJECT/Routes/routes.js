import express, { response } from 'express'
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('mainEmployPage')
})
router.get('/weekleyReport',(req,res)=>{
    res.render('weekleyReport')
})
router.get('/addemployPage',(req,res)=>{
    res.render('addemployPage')
})

export default router