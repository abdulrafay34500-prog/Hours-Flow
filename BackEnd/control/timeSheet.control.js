import employHoursSheet from '../model/empluyHoursDatabase.js'

export const gettingAllHours=async(req,res)=>{
  let allEmployHours=await employHoursSheet.find()

  res.json(allEmployHours)
}