

export async function HoursSheetFROMBackend(){
    let hoursSheetJson= await fetch('https://hours-flow-backend.vercel.app/api/timeSheet')

     let hoursSheet= await hoursSheetJson.json()
     return hoursSheet
    
}
export let hoursSheet= await HoursSheetFROMBackend()
