import  express from 'express'
const router=express.Router()

import {gettingEmploy,
        SingleEmployDetail,
        addingNewEmploy,
        updatingEmploy  ,
        showingEmployValue,
        deletingEmploy,
        }
        from '../control/employControl.js'

router.get('/',gettingEmploy)

router.get('/SingleEmploy/:id',SingleEmployDetail)

router.get('/addemployPage',(req,res)=>{
    res.render('addemployPage.ejs')
})
router.post('/addemployPage',addingNewEmploy)

router.post('/editEmploy/:id',updatingEmploy)

router.get('/editEmploy/:id',showingEmployValue)

router.get('/deleteEmploy/:id',deletingEmploy)

export default router