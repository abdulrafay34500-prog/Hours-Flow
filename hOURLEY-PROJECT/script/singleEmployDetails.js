import { Employes} from "../data/employes.js";

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

export function singleEmployDetail(employId) {

    let matchingEmploye=''
  
    Employes.forEach((employ) => {
        if (employ.Id ==employId){
            matchingEmploye=employ
        }
    });

    let name=matchingEmploye.Name
    
    let initials=name.split(" ")
    .map((word)=>{
       return word[0]
    }).join("")
   
    let TotalWeekleyHours=0
    weekDays.forEach((days)=>{
        TotalWeekleyHours+=Number(matchingEmploye.Hours[days] || 0)      
    })
    

   let singleEmployHtml=`                    
                    <button class="Cross-sign-button js-Cross-sign-button"
                    >✕</button>

                    <div class="employee-header">
                        <div class="employee-avatar">${initials}</div>

                        <div class="employee-header-info">
                            <h2>${matchingEmploye.Name}</h2>
                            <p class="Employee-Id">Employee ID: <span>${matchingEmploye.Id}</span></p>
                            <p class="Position">Customer Support Representative</p>
                        </div>
                    </div>

                    <div class="employee-hours">
                        <div class="hours-box">
                            <span class="hours-label">Hours This Week</span>
                            <strong>${TotalWeekleyHours} <small>hrs</small></strong>
                        </div>

                        <div class="hours-box">
                            <span class="hours-label">Hours This Month</span>
                            <strong>209 <small>hrs</small></strong>
                        </div>
                    </div>

                    <div class="employee-info-section">
                        <h3>Employee Information</h3>

                        <div class="info-row">
                            <span>Email</span>
                            <strong>ali@example.com</strong>
                        </div>

                        <div class="info-row">
                            <span>Phone No</span>
                            <strong>+92 300 1234567</strong>
                        </div>

                        <div class="info-row">
                            <span>Date Joined</span>
                            <strong>September 12, 2026</strong>
                        </div>

                        <div class="info-row">
                            <span>Hourly Rate</span>
                            <strong>$12 / hour</strong>
                        </div>
                    </div>

                    <div class="edit-delete-button-div">
                        <button class="edit-button">Edit</button>
                        <button class="delete-button">Delete</button>
                    </div>`;



    document.querySelector('.js-Single-employ-detail').innerHTML=singleEmployHtml;


    let EmployDetailCrossed = document.querySelector('.js-Cross-sign-button')

    EmployDetailCrossed.addEventListener('click',()=>{

        document.querySelector('.js-combining-AddingAndSingle-Employ-div').classList.remove('after-Clicked')

    })

}


