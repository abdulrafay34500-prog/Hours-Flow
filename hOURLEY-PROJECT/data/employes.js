

export let Employes =JSON.parse(localStorage.getItem('EmployDetails')) || [];

export function AddingEmploy() {
    
     let id=document.querySelector('.js-id-input')
     let Id =id.value
     let Name=document.querySelector('.js-name-input')
     let name =Name.value
     let shiftType=document.querySelector('.js-Select-shift')
     let ShiftType =shiftType.value

     if (Id != '' && name != '' && ShiftType != ''){

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

export function updatingWeekleyHours(EmployId ) {

    let currentUpdatingEmploy;
    Employes.forEach((employ)=>{
        if(employ.Id == EmployId){
            currentUpdatingEmploy=employ
        }      
    })
    let inputs = document.querySelectorAll(
        `.js-days-hours[data-employ-id="${EmployId}"]`
    );

    let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'Sat', 'Sun'];
   
    inputs.forEach((input)=>{
      

    })
    
    
  
    localStorage.setItem('EmployDetails' , JSON.stringify(Employes))

   
}
