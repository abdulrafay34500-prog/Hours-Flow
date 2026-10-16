
export const EmoloyFromBackend=async()=>{
  try {
        const response = await fetch('http://localhost:3000/api/employes');

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const employees = await response.json();
        
        return employees

    } catch (error) {
        console.error('Error fetching employees:', error);
    }
}
 export let Employes=await EmoloyFromBackend()
 console.log(Employes)

 export async function refreshEmployes() {
    Employes = await EmoloyFromBackend();
}
export default Employes;

let timeoutId;
function ShowingErrorFunction(errorReason) {
            let addingEmployPage=document.querySelector('.AddingEmploye-main-page')
            let errorText =document.querySelector('.js-Error-reason')
            addingEmployPage.classList.add('showingError')

            errorText.innerHTML=errorReason
            
                clearTimeout(timeoutId)

               timeoutId = setTimeout(()=>{
                 clearTimeout(timeoutId)
                  addingEmployPage.classList.remove('showingError')
               },2000)

}

export async function  AddingEmploy() {
   
    let id=document.querySelector('.js-id-input')
    let Id =id.value
    let Name=document.querySelector('.js-name-input')
    let name =Name.value
    let shiftType=document.querySelector('.js-Select-shift')
    let ShiftType =shiftType.value
    let hourleyWage=document.querySelector('.js-hourleyInput-input')
    let HourleyWage =hourleyWage.value
    let jobRole=document.querySelector('.js-jobRole-input')
    let JobRole =jobRole.value
    let email=document.querySelector('.js-Email-input')
    let Email =email.value
    let phoneNo=document.querySelector('.js-Phonenumber-input')
    let PhoneNo =phoneNo.value
    let joiningDate=document.querySelector('.js-JoiningDate-input')
    let JoiningDate =joiningDate.value

     const newEmploy ={
      id:Number(Id),
      name:name,
      hourleyWage:Number(HourleyWage),
      shiftType:ShiftType,
      jobRole:JobRole,
      email:Email,
      PhoneNo:PhoneNo,
      joiningDate:JoiningDate,
    }

     if (Id != '' && name != '' && ShiftType != '' && HourleyWage != ''){

        try{
            await refreshEmployes()

            let matchingId= Employes.find((employee) => {
               return employee.id == Id
            });

            if(!matchingId){
                 const responce=await fetch('http://localhost:3000/api/employes' , {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(newEmploy)
                })
                 let main =document.querySelector('.main-addingEmploy-page')
                 main.classList.remove('show')
            }else{        
                
              ShowingErrorFunction('This Employ ID is already Taken') 
            }
          
        }catch(err){      
            console.log(err.message)
        }
      
         
      
       
     }else{

           ShowingErrorFunction('Enter all Necessary Details to continue') 
           
     }
}

export function EmptyingInputs() {
     let id=document.querySelector('.js-id-input')
     let Id =id.value
     let Name=document.querySelector('.js-name-input')
     let name =Name.value
     let shiftType=document.querySelector('.js-Select-shift')
     let ShiftType =shiftType.value

    id.value=''
    Name.value=''
    shiftType.value=''
}

export async function deletionEmploy(employId) {
 
    
    await fetch(`http://localhost:3000/api/employes/${employId}/delete` ,{
                method: 'DELETE'
            })

}
export async function updatingEmployInfo(employ) {  
    let id=document.querySelector('.js-id-input')
    let Id =id.value
    let Name=document.querySelector('.js-name-input')
    let name =Name.value
    let shiftType=document.querySelector('.js-Select-shift')
    let ShiftType =shiftType.value
    let hourleyWage=document.querySelector('.js-hourleyInput-input')
    let HourleyWage =hourleyWage.value
    let jobRole=document.querySelector('.js-jobRole-input')
    let JobRole =jobRole.value
    let email=document.querySelector('.js-Email-input')
    let Email =email.value
    let phoneNo=document.querySelector('.js-Phonenumber-input')
    let PhoneNo =phoneNo.value
    let joiningDate=document.querySelector('.js-JoiningDate-input')
    let JoiningDate =joiningDate.value

     const updatedEmploy ={
      id:Number(Id),
      name:name,
      hourleyWage:Number(HourleyWage),
      shiftType:ShiftType,
      jobRole:JobRole,
      email:Email,
      PhoneNo:PhoneNo,
      joiningDate:JoiningDate,
     }

  

    if (Id != '' && name != '' && ShiftType != '' && HourleyWage != ''){

        await refreshEmployes()

        let matchingId= Employes.find((employee) => {
            return (
                String(employee.id ?? employee.Id) === String(Id) &&
                String(employee.id ?? employee.Id) !==
                    String(employ.id ?? employ.Id)
            );
        });
         
        
        
    
         if(!matchingId){
            
            try{
                let updatingBackend=await fetch(`http://localhost:3000/api/employes/${employ.id}/update` , {
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(updatedEmploy)
                })

                let main =document.querySelector('.main-addingEmploy-page')
                main.classList.remove('show')

            }catch(err){
                console.log(err.message)
            }


            
        }else{
            
            ShowingErrorFunction('This Employ ID is already Taken') 
        }
        
     }else{
 
        
        ShowingErrorFunction('Enter all Details to continue') 
     }


}


