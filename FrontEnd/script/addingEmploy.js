import { Employes,EmoloyFromBackend, AddingEmploy,EmptyingInputs,refreshEmployes} from "../data/employes.js";
import {BackendWait} from "../script/singleEmployDetails.js";
import {addingEmployPage} from "../script/addingEmployPages.js";
import{HoursSheetFROMBackend}from"../data/timeSheet.js"


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
    AllTotalMonthlyHours()
    TotalPayroll()
    TotalNumberOfEmployes();
}


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

     
}

export function TotalNumberOfEmployes() {
    let totalEmploye = document.querySelector('.js-Employe-numbers')
        let EmployCount=0;
        EmployCount+=Number(Employes.length);
        totalEmploye.innerHTML=EmployCount;
}

export async function AllTotalMonthlyHours() {
    let totalMonthlyHours = document.querySelector('.js-Total-hours-numbers')
        
    let response = await fetch('https://hours-flow-backend.vercel.app/api/timeSheet/TotalMonthlyHours',
        {
            credentials: 'include'
        }
    )

    let hours=await response.json();

    console.log(hours)

    totalMonthlyHours.innerHTML=hours
}
AllTotalMonthlyHours()
export async function TotalPayroll() {
    let TotalPayroll = document.querySelector('.js-monthly-Payroll-Amount')
        let TotalPay=0;

         let Employes=await EmoloyFromBackend()
         let hoursSheet=await HoursSheetFROMBackend()

        let employWithHours=Employes.map((employ)=>{
            let employHours={}
            hoursSheet.forEach((hoursSheet)=>{
                if(hoursSheet.employID==employ.id){
                    employHours[hoursSheet.date]=hoursSheet.hours
                }
            })

            return{
                ...employ,
                hours:employHours
            }

        })

        let Today=new Date()
        let year=Today.getFullYear()
        let month=Today.getMonth()

        let numberOfDays=new Date(year,month+1 , 0).getDate()

        let monthDays=[]
        for (let day = 1; day <= numberOfDays; day++) {
            let date=new Date(year ,month ,day)
            let formatedDate=date.getFullYear() + '-' +
                String(date.getMonth() + 1).padStart(2, '0') + '-' +
                String(date.getDate()).padStart(2, '0');

            monthDays.push(formatedDate)
        }

        
        employWithHours.forEach((employ)=>{
            let totalHourThisMonth=0
            let salary=0
            monthDays.forEach((dates)=>{
               totalHourThisMonth += employ.hours[dates]  || 0
              
            })
            salary=totalHourThisMonth*Number(employ.hourleyWage)
            TotalPay+=salary
        
        })
        
      
        TotalPayroll.innerHTML=TotalPay
}
TotalPayroll()
