import  mongoose from 'mongoose'


const employSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
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
    }
});

const employDatabase=mongoose.model('employes',employSchema)

export default employDatabase
