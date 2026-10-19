import express from 'express'
let router =express.Router()

import {signup , login , logout} from '../control/userControl.js'

router.post('/signup',signup)

router.post('/login', login)

router.post('/logout', logout)

export default router;