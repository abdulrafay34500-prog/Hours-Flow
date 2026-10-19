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
        runValidators: true
      }
  )

  res.json(allEmployHours)
}

export const TotalMonthlyHours=async(req,res)=>{
  let now = new Date()
  let year = now.getFullYear()
  let month = String(now.getMonth()+1).padStart(2 , 0)
  let thismonthstart = `${year}-${month}-01`
  let nextMonth=new Date(year,now.getMonth()+1 , 1)
  let thisMonthEnd =nextMonth.toISOString().slice(0,10)

  let totalMonthlyHours = await employHoursSheet.aggregate([
     {
      $match:{
        date:{
          $gte:thismonthstart,
          $lt:thisMonthEnd
        }
      }
     },
      { 
        $group:{
          _id:null,
          TotalHours:{$sum: "$hours"}
        }
      }
  ])

  res.json(totalMonthlyHours[0]?.TotalHours?? 0)
}
/*
export const TotalMonthlyPayroll=async(req,res)=>{
  let monthlyPayroll = await employHoursSheet.aggregate([
    {
      $group:{
        _id:null,
        toalPay:{}
      }
    }
  ])
}
*/

