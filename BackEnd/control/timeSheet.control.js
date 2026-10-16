import employHoursSheet from '../model/empluyHoursDatabase.js'

export const gettingAllHours=async(req,res)=>{
  let allEmployHours=await employHoursSheet.find()

  res.json(allEmployHours)
}

export const updatingOrAddingHours=async(req,res)=>{
  let allEmployHours=await employHoursSheet.findOneAndUpdate(
      {
        employID: Number(req.params.id),
        date:req.body.date,
      },
      {
          $set : {   
          hours: Number(req.body.hours)
          }
      }
    ,{
        upsert: true, 
        new: true,
        runValidators: true
      }
  )

  res.json(allEmployHours)
}


