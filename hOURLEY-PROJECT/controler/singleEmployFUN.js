import employes from '../Model/EmployDatabase.js'

export const singleEmployFUN =async (req,res)=>{
     const employee=await employes.findOne({_id:req.params.id})
    res.render('SingleEmployPage' ,{employee})
}