import employDatabase from '../model/employesDatabase.js'
import  mongoose from 'mongoose'

export const gettingEmploy= async (req,res)=>{
    try{   
        const allEmployes= await employDatabase.find()
        res.json(allEmployes)
        
    }catch(error){
             res.status(500).json({message:error.message})
    }
}

export const SingleEmployDetail =async(req,res)=>{

    try{   
        const singleEmployeDetails= await employDatabase.findOne({id:req.params.id})
        res.json(singleEmployeDetails)
        
    }catch(error){
             res.status(500).json({message:error.message})
    }
      
}

export const addingNewEmploy=async(req,res)=>{
    try{   
        const addedemploy= await employDatabase.create(req.body)
        res.json(addedemploy)
        
    }catch(error){
             res.status(500).json({message:error.message})
    }
}

export const updatingEmploy =async (req,res)=>{

        try{
          let updatedEmploy=  await employDatabase.findOneAndUpdate(
                {_id :req.params.id},
                {    id: Number(req.body.id),
                    name: req.body.name,
                    hourleyWage:Number(req.body.hourleyWage),
                    shiftType: req.body.shiftType,
                }
            )
           res.json(updatedEmploy)
        }catch(error){
           return res.render('server404Erroe',{message : error}) 
        }

}

export const showingEmployValue=async (req,res)=>{
     try{
        let editingEmploy=await employDatabase.findOne({id : req.params.id})      
        res.json(editingEmploy)
     }catch(error){
       res.status(500).json({message:error.message}) 
     }
      

}
export const deletingEmploy=async (req,res)=>{
    try{
        let deletedEmploy=await employDatabase.deleteOne({_id:req.params.id});
        res.json(deletedEmploy)
     }catch(error){
       res.status(500).json({message:error.message}) 
     }
}