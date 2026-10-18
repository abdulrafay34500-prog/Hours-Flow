import express from 'express'
let router =express.Router()

import {usersFUN} from '../control/userControl.js'

router.get('/',usersFUN)

export default router;