import { Employes} from "../data/employes.js";

console.log(Employes)
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
   

    console.log(initials)


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
                            <strong>48 <small>hrs</small></strong>
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


