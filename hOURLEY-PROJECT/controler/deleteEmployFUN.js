import employes from '../Model/EmployDatabase.js'

export const deleteEmployPostFun= async (req,res)=>{    

    try{
        await employes.deleteOne({_id:req.params.id})

        res.redirect(`/`)
    }catch(error){
        res.render('errorPage' ,{reason : error})
    }     
} 

       
    
export const DeletePageHtmlFUN =async(req,res)=>{
    const employee =await employes.findOne({_id:req.params.id})
    res.render('deleteEmployPage',{employee})
}