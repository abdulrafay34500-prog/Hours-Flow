import { Employes , deletionEmploy ,EmoloyFromBackend ,refreshEmployes} from "../data/employes.js";
import {WaitingForBackend} from "./addingEmploy.js";
import {addingEmployPage} from "./addingEmployPages.js";
import {hoursBackEndHistory} from "./historyPage.js";
import {HoursSheetFROMBackend} from "../data/timeSheet.js";



// Getting Weekley dates
let startingDate=new Date()
let day=startingDate.getDay()

let difrence=day==0? -6 :1- day;

startingDate.setDate(startingDate.getDate() + difrence)
let weekDays=[];

for (let i = 0; i <7; i++) {
    let date=new Date(startingDate)
    date.setDate(date.getDate() +i)
    let formatedDate=date.getFullYear() + '-' +
        String(date.getMonth() + 1).padStart(2, '0') + '-' +
        String(date.getDate()).padStart(2, '0');

    weekDays.push(formatedDate)
}
// Getting Monthly  dates
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
 

  // Function Starting.

  
  export async function BackendWait(employID) {
    let singleEmploye= await getitngSingleEmployBackend(employID)
    let hoursSheet=await HoursSheetFROMBackend()

    singleEmploye.Hours ??= {};

        hoursSheet.forEach((hoursheet)=>{
            if(singleEmploye.id==hoursheet.employID){
                singleEmploye.Hours[hoursheet.date]=hoursheet.hours
            }
        })



     singleEmployDetail(employID , singleEmploye)
  }

    let singleEmploye;
    export async function getitngSingleEmployBackend(employID) {
        let responce = await fetch(`https://hours-flow-backend.vercel.app/api/employes/${employID}`,
            {
                 credentials: 'include'
            }
        )

        return responce.json()

    }
 

export function singleEmployDetail(employId , singleEmploye) {
    

    let name=singleEmploye.name
    
    let initials=name.split(" ")
    .map((word)=>{
       return word[0]
    }).join("")
   
    // Calculating Weekley Hours
    let TotalWeekleyHours=0
    weekDays.forEach((days)=>{
        TotalWeekleyHours+=Number(singleEmploye.Hours[days] || 0)      
    })

    // Calculating Monthly Hours
    let TotalMonthlyHours=0
     monthDays.forEach((days)=>{
        TotalMonthlyHours+=Number(singleEmploye.Hours[days] || 0)      
    })

    // Calculating Monthly Salary
    let salary=0;
    salary=TotalMonthlyHours * Number(singleEmploye.hourleyWage)

 
    
   let singleEmployHtml=`                    
                    <button class="Cross-sign-button js-Cross-sign-button"
                    >✕</button>

                    <div class="employee-header">
                        <div class="employee-avatar">${initials}</div>

                        <div class="employee-header-info">
                            <h2>${singleEmploye.name}</h2>
                            <p class="Employee-Id">Employee ID: <span>${singleEmploye.id}</span></p>
                            <p class="Position">${singleEmploye.jobRole}</p>
                        </div>
                    </div>

                    <div class="employee-hours">
                        <div class="hours-box">
                            <span class="hours-label">Hours This Week</span>
                            <strong>${TotalWeekleyHours} <small>hrs</small></strong>
                        </div>

                        <div class="hours-box">
                            <span class="hours-label">Hours This Month</span>
                            <strong>${TotalMonthlyHours} <small>hrs</small></strong>
                        </div>
                    </div>
                    <div class="salary-div">
                            <span class="Salary-label">This Month Salary so far</span>
                            <strong>${salary} <small>PKR</small></strong>
                    </div>

                    <div class="employee-info-section">
                        <h3>Employee Information</h3>

                        <div class="info-row">
                            <span>Email</span>
                            <strong>${singleEmploye.email}</strong>
                        </div>

                        <div class="info-row">
                            <span>Phone No</span>
                            <strong>${singleEmploye.PhoneNo}</strong>
                        </div>

                        <div class="info-row">
                            <span>Date Joined</span>
                            <strong>${singleEmploye.joiningDate}</strong>
                        </div>

                        <div class="info-row">
                            <span>Hourly Rate</span>
                            <strong>PKR ${singleEmploye.hourleyWage} / hour</strong>
                        </div>
                    </div>

                    <div class="edit-delete-button-div">
                        <button class="edit-button js-edit-button" data-employ-id=${singleEmploye.id}>Edit</button>
                        <button class="History-button js-History-button" data-employ-id=${singleEmploye.id}>History</button>
                        <button class="delete-button js-delete-button" data-employ-id=${singleEmploye.id}>Delete</button>
                    </div>`;

       let deletingPopUPHTML=`<div class="delete-popup-box">
                    <h2>Delete Employee?</h2>
                    <p>Are you sure you want to Remove ${singleEmploye.name}?</p>
                    <p class="delete-warning">
                        This action cannot be undone.
                    </p>
                    <div class="delete-popup-buttons">
                        <button class="cancel-delete-button js-cancel-delete">
                            Cancel
                        </button>
                        <button class="confirm-delete-button js-confirm-delete" data-employ-id=${singleEmploye.id}
                        data-employ-name=${singleEmploye.name}
                        >
                            Delete
                        </button>
                    </div>
                </div>`             



    document.querySelector('.js-Single-employ-detail').innerHTML=singleEmployHtml;
    document.querySelector('.js-delete-popup').innerHTML=deletingPopUPHTML;


    let EmployDetailCrossed = document.querySelector('.js-Cross-sign-button')
    let deleteEmployButton = document.querySelector('.js-delete-button')
    let EditEmployButton = document.querySelector('.js-edit-button')
    let HistoryButton = document.querySelector('.js-History-button')
    let cancelDeleteButton=document.querySelector('.js-cancel-delete')
    let ConformDeleteButton=document.querySelector('.js-confirm-delete')
    let mainPage=document.querySelector('.main-addingEmploy-page');

    EmployDetailCrossed.addEventListener('click',()=>{

        document.querySelector('.js-combining-AddingAndSingle-Employ-div').classList.remove('after-Clicked')

    })

    deleteEmployButton.addEventListener('click',()=>{
        mainPage.classList.add('clickingDelete')
    })
    cancelDeleteButton.addEventListener('click',()=>{
        mainPage.classList.remove('clickingDelete')
    })
    ConformDeleteButton.addEventListener('click',async ()=>{

        let employId=ConformDeleteButton.dataset.employId
        deletionEmploy(employId)
        mainPage.classList.remove('clickingDelete')
    
        await WaitingForBackend()
        document.querySelector('.js-combining-AddingAndSingle-Employ-div').classList.remove('after-Clicked') 

    })

     EditEmployButton.addEventListener('click',()=>{

        let employId=deleteEmployButton.dataset.employId
        let EditPageHeading=`Update ${singleEmploye.name} Info`

        let main =document.querySelector('.main-addingEmploy-page')
        main.classList.add('show')
        addingEmployPage(EditPageHeading , singleEmploye)

       
    })
    HistoryButton.addEventListener('click',()=>{
        let employId=deleteEmployButton.dataset.employId
        mainPage.classList.add('clicking-history-button')
         hoursBackEndHistory(employId)
    })

}

