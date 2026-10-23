import  express from 'express'
const router=express.Router()

import {gettingAllHours ,updatingOrAddingHours , TotalMonthlyHours , deletingHoursHistory} 
from '../control/timeSheet.control.js'

router.use(authMiddleWare);  

router.get('/' , gettingAllHours)

router.get('/TotalMonthlyHours' , TotalMonthlyHours )

router.post('/:id/updatingHours',updatingOrAddingHours)

router.delete('/:id/delete',deletingHoursHistory)

export default router