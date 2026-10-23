import  mongoose from 'mongoose'


const employSchema = new mongoose.Schema({
    owner:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'user',
       required:true
    },
    id: {
        type: Number,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true
    },
    hourleyWage: {
        type: Number,
        required: true
    },
    shiftType: {
        type: String,
        required: true
    },
     jobRole: {
        type: String,       
    },
    email: {
        type: String,       
    },
     PhoneNo: {
        type: String,       
    },
     joiningDate: {
        type: String,       
    }
});

const employDatabase=mongoose.model('employes',employSchema)

export default employDatabase
