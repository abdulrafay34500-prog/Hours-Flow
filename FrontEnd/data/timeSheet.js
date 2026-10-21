

export async function HoursSheetFROMBackend(){
    let hoursSheetJson= await fetch('https://molasses-distorted-tiger.abasthan.app/api/timeSheet')

     let hoursSheet= await hoursSheetJson.json()
     return hoursSheet
    
}
export let hoursSheet= await HoursSheetFROMBackend()
