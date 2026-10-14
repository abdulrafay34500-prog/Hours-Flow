import employDatabase from '../model/employesDatabase.js'
import  mongoose from 'mongoose'

export const gettingEmploy= async (req,res)=>{
    let employes=await employDatabase.find()   
    res.render('home.ejs',{employes})
}

export const SingleEmployDetail =async(req,res)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.render('server404Erroe',{message : 'Invalid ID'})
         }

    try{   
         let singleEmploy=await employDatabase.findOne({_id:req.params.id})
         if(singleEmploy){
            return res.render('SingleEmploy',{singleEmploy})
         }else{
            return  res.render('server404Erroe',{message : 'No Match Found'})
         }
        
    }catch(error){
           return  res.render('server404Erroe',{message : error})
    }
    
    

    
}

export const addingNewEmploy=async(req,res)=>{
    if(req.body.id !==''||req.body.name !==''||req.body.hourleyWage !==''||req.body.shiftType !==''){
         return   res.render('updateERROR',{message : 'Add all Details To continue'})
    }
    await employDatabase.create(req.body)
      return  res.redirect('/')
   
}

export const updatingEmploy =async (req,res)=>{

        try{
            await employDatabase.findOneAndUpdate(
                {_id :req.params.id},
                {    id: Number(req.body.id),
                    name: req.body.name,
                    hourleyWage:Number(req.body.hourleyWage),
                    shiftType: req.body.shiftType,
                }
            )
             res.redirect('/')
        }catch(error){
           return res.render('server404Erroe',{message : error}) 
        }

}

export const showingEmployValue=async (req,res)=>{
     let employINdB=mongoose.Types.ObjectId.isValid(req.params.id)

     try{
        let editedEmploy=await employDatabase.findOne({_id : req.params.id})
        if(!editedEmploy){
             return res.render('server404Erroe',{message : 'Invalid ID'}) 
        }
        res.render('editEmploy.ejs' , {employ : editedEmploy })
     }catch(error){
       return res.render('server404Erroe',{message : error}) 
     }
      

}
export const deletingEmploy=async (req,res)=>{
    await employDatabase.deleteOne({_id:req.params.id})
    res.redirect('/')
}