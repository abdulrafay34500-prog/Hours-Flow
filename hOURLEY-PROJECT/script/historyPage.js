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

                          ${MonthlyDivs(employId)}

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



/// starting Function
function MonthlyDivs(employId) {
    let Html='';

    let Today=new Date()
    let year=Today.getFullYear()
    let month=Today.getMonth()

    let curentMonth=new Date().getMonth()
    let curentYear=new Date().getFullYear()

     let matchingEmploy=Employes.find((employ)=>employId==employ.Id)
   
    /// Making last 6 months Array
    let SixMonthsArray=[];
    for (let i = 1; i <= 6 ; i++) {
        let month=new Date(curentYear , curentMonth-i)
        let formatedDate=months[month.getMonth()]

        SixMonthsArray.push(formatedDate)
    }

    let monthlyDaysNUM=1
    
    SixMonthsArray.forEach((Month)=>{

        monthlyDaysNUM--
        
        /// MAking all dates in a month 

        let monthlyDays=new Date(curentYear,curentMonth+monthlyDaysNUM ,0).getDate()
        let month=new Date(curentYear,curentMonth+monthlyDaysNUM ,0).getMonth()

        console.log(monthlyDays , month)
        let monthlyDates=[];
        for (let i = 1; i <= monthlyDays; i++) {
            const date =new Date(curentYear,month,i)
            let formatedDate=date.getFullYear() + '-' +
                String(date.getMonth() + 1).padStart(2, '0') + '-' +
                String(date.getDate()).padStart(2, '0');

            monthlyDates.push(formatedDate)   
        }
    

         // Calcuting all Month Total hours
        let TotalMonthlyHours=0;      
        monthlyDates.forEach((Dates)=>{
            TotalMonthlyHours+=Number(matchingEmploy.Hours[Dates] || 0)
        })

        // Calcuting all Monthly salaries
        let MonthlySalary=0
        MonthlySalary=TotalMonthlyHours*Number(matchingEmploy.HourleyWage)
        
       Html+=` 
         <div class="history-month-row">

            <div class="month-info">
                <strong>${Month}</strong>
                <span>${curentYear}</span>
            </div>

            <div class="hours-info">
                <strong>${TotalMonthlyHours}</strong>
                <span>hrs</span>
            </div>

            <div class="salary-info">
                <strong>PKR ${MonthlySalary}</strong>
            </div>

        </div>`
    })
   

        return Html;
}

