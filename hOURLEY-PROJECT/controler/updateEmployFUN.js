import { response } from 'express'
import employes from '../Model/EmployDatabase.js'

export const updateEmployPostFun= async (req,res)=>{

        if(req.body.id !== '' && req.body.name !== ''&& req.body.hourleyWage !== ''&&
             req.body.shiftType !== ''
        ){
            try{
                await employes.findOneAndUpdate(
                 {_id:req.params.id},    
                { $set:{
                    id:req.body.id,
                    name:req.body.name,
                    hourleyWage:req.body.hourleyWage,
                    jobRole:req.body.jobRole,
                    email:req.body.email,
                    PhoneNo:req.body.PhoneNo,
                    joiningDate:req.body.joiningDate,
                    shiftType:req.body.shiftType
                  } 
                })
                res.redirect(`/SingleEmployPage/${req.params.id}`)
            }catch(error){
                res.render('errorPage' ,{reason : error})
            }     
        } 

       
    
}

export const updateEmployGetFun= async(req,res)=>{
   const employee =await employes.findOne({_id:req.params.id})
    res.render('updateEmployPage' ,{employee})
}