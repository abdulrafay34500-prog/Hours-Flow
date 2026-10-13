import employes from '../Model/EmployDatabase.js'

export const AddingEmployPostFun= async (req,res)=>{

   
        if(req.body.id !== '' && req.body.name !== ''&& req.body.hourleyWage !== ''&& req.body.jobRole !== ''&&
           req.body.shiftType !== ''
        ){
            try{
                await employes.insertOne({
                    id:req.body.id,
                    name:req.body.name,
                    hourleyWage:req.body.hourleyWage,
                    jobRole:req.body.jobRole,
                    email:req.body.email,
                    PhoneNo:req.body.PhoneNo,
                    joiningDate:req.body.joiningDate,
                    shiftType:req.body.shiftType
                })
                res.redirect('/')
            }catch(error){
                res.render('errorPage' ,{reason : error})
            }     
        } 
    
}

export const AddingEmployGetFun= (req,res)=>{
    res.render('addemployPage')
}