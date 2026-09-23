import { Employes , AddingEmploy,EmptyingInputs} from "../data/employes.js";
import {singleEmployDetail} from "../script/singleEmployDetails.js";


renderEmployDetails()
export function renderEmployDetails() {
    let EmployHTML='';

    Employes.forEach((employ)=>{
    EmployHTML+=` 
    <div class="employ-detail js-employ-detail-click"
    data-employe-id=${employ.Id}
    >
        <div class="ID">
            ${employ.Id}
        </div>
        <div class="Employ-name">
            ${employ.Name}
        </div>
        <div class="shift-type">
            ${employ.ShiftType}
        </div>
    </div>`
    
    })

    document.querySelector('.js-added-Employes-details')
    .innerHTML=EmployHTML;
}


let AddButton = document.querySelector('.js-add-employ-button')
let saveButton = document.querySelector('.js-save-button')
let crossButton =document.querySelector('.js-Cross-sign')
let totalEmploye = document.querySelector('.js-Employe-numbers')
let EmployDetailClicked = document.querySelectorAll('.js-employ-detail-click')



  TotalNumberOfEmployes();

function TotalNumberOfEmployes() {
    let EmployCount=0;
    EmployCount+=Number(Employes.length);
    totalEmploye.innerHTML=EmployCount;
}
AddButton.addEventListener('click',()=>{
    let main =document.querySelector('.main-addingEmploy-page')
    main.classList.add('show')
})
crossButton.addEventListener('click',()=>{
    let main =document.querySelector('.main-addingEmploy-page')
    main.classList.remove('show')
    EmptyingInputs()
})
saveButton.addEventListener('click' ,()=>{

      AddingEmploy();
      TotalNumberOfEmployes();
      renderEmployDetails()
})
EmployDetailClicked.forEach((employClicked)=>{
   employClicked.addEventListener('click',()=>{
    let employId=employClicked.dataset.employeId

    singleEmployDetail(employId)
    
    document.querySelector('.js-combining-AddingAndSingle-Employ-div').classList.add('after-Clicked')

   })
})
