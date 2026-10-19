import  express from 'express'
const router=express.Router()

import {gettingAllHours ,updatingOrAddingHours , TotalMonthlyHours} from '../control/timeSheet.control.js'

router.get('/' , gettingAllHours)

router.get('/TotalMonthlyHours' , TotalMonthlyHours )

router.post('/:id/updatingHours',updatingOrAddingHours)

export default router