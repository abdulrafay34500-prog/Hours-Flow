import mongoose from 'mongoose'
import employes from '../Model/EmployDatabase.js'

export const singleEmployFUN =async (req,res)=>{

    try{
       if(mongoose.Types.ObjectId.isValid(req.params.id)){
           const employee=await employes.findOne({_id:req.params.id})
           res.render('SingleEmployPage' ,{employee})
       }else{
            res.render('errorPage' ,{reason : 'Employ ID is not Valid'})
       }
       
    }catch(error){
        res.render('errorPage' ,{reason : error})
    }
     
}