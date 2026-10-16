import  express from 'express'
const router=express.Router()

import {gettingAllHours} from '../control/timeSheet.control.js'

router.get('/' , gettingAllHours)

export default router