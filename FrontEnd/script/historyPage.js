import{EmoloyFromBackend}from"../data/employes.js"
import{HoursSheetFROMBackend}from"../data/timeSheet.js"

export async function hoursBackEndHistory(employId) {
   let Employes=await EmoloyFromBackend()
   let hoursSheet=await HoursSheetFROMBackend()

   let employWithHours=Employes.map((employ)=>{

      let employHours={};

      hoursSheet.forEach((hoursheet)=>{
        if(employ.id==hoursheet.employID){
            employHours[hoursheet.date]=hoursheet.hours
        }
      })

      return {
        ...employ,
         Hours: employHours
      }
   })

   console.log(employWithHours)

 HistoryPageREnder(employId , employWithHours)

}

function HistoryPageREnder(employId ,employWithHours) {

    let matchingEmploy=employWithHours.find((employ)=>employId==employ.id)
    
    let Html=`<div class="history-popup-overlay js-history-popup">

                    <div class="history-popup">

                        <!-- Header -->
                        <div class="history-header">

                            <div>
                                <p class="history-label">EMPLOYEE HISTORY</p>
                                <h2>${matchingEmploy.name}</h2>
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

                          ${MonthlyDivs(employId ,employWithHours)}

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
function MonthlyDivs(employId ,employWithHours) {

   
    
    let Html='';

    let curentMonth=new Date().getMonth()
    let curentYear=new Date().getFullYear()

     let matchingEmploy=employWithHours.find((employ)=>employId==employ.id)


   
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

        let monthlyDates=[];
        for (let i = 1; i <= monthlyDays; i++) {
            const date =new Date(curentYear,month,i)
            let formatedDate=date.getFullYear() + '-' +
                String(date.getMonth() + 1).padStart(2, '0') + '-' +
                String(date.getDate()).padStart(2, '0');

            monthlyDates.push(formatedDate)   
        }
    

         // Calcuting all Month Total hours
         let YearOFMonth='';
        let TotalMonthlyHours=0;      
        monthlyDates.forEach((date)=>{
            TotalMonthlyHours+=Number(matchingEmploy.Hours?.[String(date)] || 0)
            YearOFMonth=new Date(date).getFullYear();           
        })

        // Calcuting all Monthly salaries
        let MonthlySalary=0
        MonthlySalary=TotalMonthlyHours*Number(matchingEmploy.hourleyWage)
        
       Html+=` 
         <div class="history-month-row">

            <div class="month-info">
                <strong>${Month}</strong>
                <span>${YearOFMonth}</span>
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


 