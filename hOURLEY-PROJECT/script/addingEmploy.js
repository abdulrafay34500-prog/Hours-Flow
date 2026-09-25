import { Employes , AddingEmploy,EmptyingInputs} from "../data/employes.js";
import {singleEmployDetail} from "../script/singleEmployDetails.js";
import {addingEmployPage} from "../script/addingEmployPages.js";


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

    ClickingButtons()
}

ClickingButtons()
function ClickingButtons() {
    
    let AddButton = document.querySelector('.js-add-employ-button')
    let EmployDetailClicked = document.querySelectorAll('.js-employ-detail-click')

    AddButton.addEventListener('click',()=>{
        let heading='Enter Employ Details'
        addingEmployPage(heading)
        let main =document.querySelector('.main-addingEmploy-page')
        main.classList.add('show')
    })

    EmployDetailClicked.forEach((employClicked)=>{
    employClicked.addEventListener('click',()=>{
        let employId=employClicked.dataset.employeId

        singleEmployDetail(employId)
        
        document.querySelector('.js-combining-AddingAndSingle-Employ-div').classList.add('after-Clicked')
        renderEmployDetails()
    })
    })

     TotalNumberOfEmployes();
}

export function TotalNumberOfEmployes() {
    let totalEmploye = document.querySelector('.js-Employe-numbers')
        let EmployCount=0;
        EmployCount+=Number(Employes.length);
        totalEmploye.innerHTML=EmployCount;
}