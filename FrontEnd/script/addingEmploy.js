import { Employes,EmoloyFromBackend, AddingEmploy,EmptyingInputs,refreshEmployes} from "../data/employes.js";
import {BackendWait} from "../script/singleEmployDetails.js";
import {addingEmployPage} from "../script/addingEmployPages.js";


WaitingForBackend()

export async function WaitingForBackend(params) {
    await EmoloyFromBackend()
     await refreshEmployes();
    renderEmployDetails()
}

export function renderEmployDetails() {
    let EmployHTML='';

    Employes.forEach((employ)=>{
    EmployHTML+=` 
    <div class="employ-detail js-employ-detail-click"
    data-employe-id=${employ.id}
    >
        <div class="ID">
            ${employ.id}
        </div>
        <div class="Employ-name">
            ${employ.name}
        </div>
        <div class="shift-type">
            ${employ.shiftType}
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

        BackendWait(employId)
        
        document.querySelector('.js-combining-AddingAndSingle-Employ-div').classList.add('after-Clicked')
        renderEmployDetails()
    })
    })

     TotalNumberOfEmployes();
     AllTotalMonthlyHours();
     TotalPayroll();
}

export function TotalNumberOfEmployes() {
    let totalEmploye = document.querySelector('.js-Employe-numbers')
        let EmployCount=0;
        EmployCount+=Number(Employes.length);
        totalEmploye.innerHTML=EmployCount;
}
export async function AllTotalMonthlyHours() {
    let totalMonthlyHours = document.querySelector('.js-Total-hours-numbers')
        
    let response = await fetch('http://localhost:3000/api/timeSheet/TotalMonthlyHours')

    let hours=await response.json();

    totalMonthlyHours.innerHTML=hours
}
export function TotalPayroll() {
    let TotalPayroll = document.querySelector('.js-monthly-Payroll-Amount')
        let hours=0;

        

        TotalPayroll.innerHTML=5000
}

