

export async function HoursSheetFROMBackend(){
    let hoursSheetJson= await fetch('http://localhost:3000/api/timeSheet')

     let hoursSheet= await hoursSheetJson.json()
     return hoursSheet
    
}
export let hoursSheet= await HoursSheetFROMBackend()
