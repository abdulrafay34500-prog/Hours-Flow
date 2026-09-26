

export let Employes =JSON.parse(localStorage.getItem('EmployDetails')) || [];



export function AddingEmploy() {

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

     if (Id != '' && name != '' && ShiftType != '' && HourleyWage != ''){

        let duplicateId;

            Employes.forEach(employ => {
                if(Id == employ.Id){
                    duplicateId = Id
                }
            });
            if(!duplicateId){
                Employes.push({
                    Id : Id,
                    Name :name,
                    ShiftType:ShiftType,
                    HourleyWage:HourleyWage,
                    JobRole:JobRole,
                    Email:Email,
                    PhoneNo:PhoneNo,
                    JoiningDate:JoiningDate,

                       Hours:{}
                })

                localStorage.setItem('EmployDetails' , JSON.stringify(Employes))

                EmptyingInputs()

                let main =document.querySelector('.main-addingEmploy-page')
                main.classList.remove('show')

                
            }else{
                ShowingErrorFunction('This Id is already Taken ') 
            }
           


     }  else{

           ShowingErrorFunction('Enter all Details to continue') 
     }
}

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

export function deletionEmploy(employId) {
 
    let newEmployArray=[]

    Employes.forEach((employ)=>{
       if (employId !=employ.Id){
         newEmployArray.push(employ)
       }
    })
    
    Employes=newEmployArray;

    localStorage.setItem('EmployDetails' , JSON.stringify(Employes))
}
export function updatingEmployInfo(employ) {  
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

    if (Id != '' && name != '' && ShiftType != '' && HourleyWage != ''){

        let AllemployIds=Employes.filter((employy)=>{ return employy.Id !==employ.Id})
         
        let matchingId;

        AllemployIds.forEach((employeee=>{    
            
            if(Id==employeee.Id){
               matchingId=employeee;
            }                  
        }))

      

        
         if(!matchingId){
            employ.Id= Id
            employ.Name =name
            employ.ShiftType=ShiftType
            employ.HourleyWage=HourleyWage
            employ.JobRole=JobRole
            employ.Email=Email
            employ.PhoneNo=PhoneNo
            employ.JoiningDate=JoiningDate

            localStorage.setItem('EmployDetails' , JSON.stringify(Employes))

            let main =document.querySelector('.main-addingEmploy-page')
                main.classList.remove('show')
        }else{
            
            ShowingErrorFunction('This Employ ID is already Taken') 
        }
        
     }else{
 
        
        ShowingErrorFunction('Enter all Details to continue') 
     }


}

