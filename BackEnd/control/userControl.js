import userCollection from '../model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import 'dotenv/config'

export async function  signup(req,res) {

    let {name ,email ,password}=req.body

    if(!name || !email || !password){
       return res.send({success:false , message : 'Info Missing'})
    }

    try{
        let userExist= await  userCollection.findOne({email})

        if(userExist){
           return res.send({success:false , message: 'USer Alreeady Exist'})
        }

       let hashedPassword= await bcrypt.hash(password , 10)

       let user=new userCollection({
        name,
        email,
        password:hashedPassword
       })

       await user.save()

       let token=jwt.sign({id:user._id} , process.env.JWT_SECRET , { expiresIn: '7d' })

       res.cookie( 'token' , token , {
        httpOnly:true,
        secure : process.env.NODE_ENV == 'production',
        sameSite:process.env.NODE_ENV == 'production'? 'none': 'strict',
        maxAge : 7 *24 *60 *60 *1000
       })

       res.json({success:true , message :'Sign In Successfully'})
    }catch(err){
       return res.send({success:false , message : err.message})
    }
  
}

export async function  login(req,res) {
   let { email , password}=req.body

   if( !email || !password){
      return res.send({success:false , message :'Enter all details to continue'})
   }
   try{
     let user=await userCollection.findOne({email})

     if(!user){
       return res.send({success:false , message : 'User not found'})
     } 

     let ismatch=await bcrypt.compare(password ,user.password)

     if(!ismatch){
        return res.send({success:false , message : 'Wrong Password'})
     }
     
     let token =jwt.sign({id:user._id} , process.env.JWT_SECRET , {expiresIn:'7d'})

     res.cookie('token' , token , {
         httpOnly:true,
         secure: process.env.NODE_ENV == 'production',
         sameSite:process.env.NODE_ENV == 'production'? 'none': 'strict',
         maxAge : 7 *24 *60 *60 *1000
     })

     return res.send({success:true , message :'Login Successfully'})

   }catch(err){
      res.send({success:false , message : err.message})
   }
}

export let logout =async (req ,res ) => {
   try{
     res.clearCookie('token' ,{
      httpOnly:true,
      secure: process.env.NODE_ENV == 'production',
      sameSite:process.env.NODE_ENV == 'production'? 'none': 'strict',
     })
     
     return res.json({
            success: true,
            message: 'Logout Successfully'
        });
   }catch(err){
      res.send({success:false , message:err.message})
   }
}