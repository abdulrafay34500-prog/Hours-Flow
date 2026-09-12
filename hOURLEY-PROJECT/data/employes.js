import {renderEmployDetails} from '../script/addingEmploy.js'

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
                })

                localStorage.setItem('EmployDetails' , JSON.stringify(Employes))

                id.value=''
                Name.value=''
                shiftType.value=''

                let main =document.querySelector('.main-addingEmploy-page')
                main.classList.remove('show')

                renderEmployDetails()
            }else{
                console.log('id already taken')
            }
           


     }  
}