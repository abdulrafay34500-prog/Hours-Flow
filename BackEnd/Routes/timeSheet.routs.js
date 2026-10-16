import  express from 'express'
const router=express.Router()

import {gettingAllHours ,updatingOrAddingHours} from '../control/timeSheet.control.js'

router.get('/' , gettingAllHours)

router.post('/:id/updatingHours',updatingOrAddingHours)

export default router