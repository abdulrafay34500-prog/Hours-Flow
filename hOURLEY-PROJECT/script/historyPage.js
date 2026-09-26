import{Employes}from"../data/employes.js"

export function HistoryPageREnder(employId) {

    let matchingEmploy=Employes.find((employ)=>employId==employ.Id)
    
    let Html=`<div class="history-popup-overlay js-history-popup">

                    <div class="history-popup">

                        <!-- Header -->
                        <div class="history-header">

                            <div>
                                <p class="history-label">EMPLOYEE HISTORY</p>
                                <h2>${matchingEmploy.Name}</h2>
                                <p class="history-subtitle">Last 6 months</p>
                            </div>

                            <button class="history-close-button js-history-close">
                                &times
                            </button>

                        </div>


                        <!-- History Box -->
                        <div class="history-box">

                            <!-- Table Header -->
                            <div class="history-table-header">
                                <span>MONTH</span>
                                <span>HOURS</span>
                                <span>SALARY</span>
                            </div>

                          ${MonthlyDivs()}

                        </div>

                    </div>

                </div>`

     document.querySelector('.js-history-page-popup')
     .innerHTML=Html;    
     
     let crossButton=document.querySelector('.js-history-close')
     let mainPage=document.querySelector('.main-addingEmploy-page');

     crossButton.addEventListener('click' ,()=>{
         mainPage.classList.remove('clicking-history-button')
     })
}


    let months = ["January","February","March","April","May","June","July","August","September",
        "October","November","December"
     ];

let curentMonth=new Date().getMonth()
let curentYear=new Date().getFullYear()



let SixMonthsArray=[];
for (let i = 1; i <= 6 ; i++) {
    let month=new Date(curentYear , curentMonth-i)
    let formatedDate=months[month.getMonth()]

    SixMonthsArray.push(formatedDate)
}
console.log(SixMonthsArray)

function MonthlyDivs() {
    let Html='';

    SixMonthsArray.forEach((Month)=>{
       Html+=` 
         <div class="history-month-row">

            <div class="month-info">
                <strong>${Month}</strong>
                <span>${curentYear}</span>
            </div>

            <div class="hours-info">
                <strong>165</strong>
                <span>hrs</span>
            </div>

            <div class="salary-info">
                <strong>$1,180</strong>
            </div>

        </div>`
    })
   

        return Html;
}