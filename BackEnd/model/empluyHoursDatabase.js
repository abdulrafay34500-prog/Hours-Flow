import  mongoose from 'mongoose'


const employSchemaHoursSheet=new mongoose.Schema({
  employID:{
    type:Number,
    required:true
  },
    date:{
    type:String,
    required:true
  },
    hours:{
    type:Number,
    required:true
  }
})


const employHoursSheet=mongoose.model('timeSheet',employSchemaHoursSheet , 'timeSheet')

export default employHoursSheet ;

