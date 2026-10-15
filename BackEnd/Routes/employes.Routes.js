import  express from 'express'
const router=express.Router()

import {gettingEmploy,
        SingleEmployDetail,
        addingNewEmploy,
        updatingEmploy  ,
        deletingEmploy,
        }
        from '../control/employControl.js'

// Showing All Employes        
router.get('/',gettingEmploy)

// Sowing Single Employ
router.get('/:id',SingleEmployDetail)

//Adding New Employ
router.post('/',addingNewEmploy)

//Updating  Employ
router.put('/:id/update',updatingEmploy)


//Deleting Employ
router.delete('/:id/delete',deletingEmploy)

export default router