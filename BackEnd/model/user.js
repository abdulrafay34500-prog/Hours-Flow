import mongoose   from "mongoose";


let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true,  
    },
    email:{
        type:String,
        required :true,  
        unique:true
    },
    password:{
        type:String,
        required :true,  
    },
})

let userCollection = mongoose.model('user' , userSchema , 'user')

export default userCollection