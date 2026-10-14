import employes from '../Model/EmployDatabase.js'

export const MAinPAgeFun=async(req,res)=>{
    const employee=await employes.find()
   
    res.render('mainEmployPage' ,{employee})
}
