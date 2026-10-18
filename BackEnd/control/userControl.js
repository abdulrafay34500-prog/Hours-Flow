import userCollection from '../model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import 'dotenv/config'

export async function  usersFUN(req,res) {

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
    }catch(err){
       return res.send({success:false , message : err.message})
    }
  
}