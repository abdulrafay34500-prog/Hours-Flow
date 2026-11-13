import '../CSS-Files/historyPage.css'

function MonthlyHistory({setMonthlyHistory , employ}) {
   
    return(
        <div  className="js-history-page-popup">
            <div className="history-popup-overlay js-history-popup">

                    <div className="history-popup">

                        <div className="history-header">

                            <div>
                                <p className="history-label">EMPLOYEE HISTORY</p>
                                <h2>{employ.name}</h2>
                                <p className="history-subtitle">Last 6 months</p>
                            </div>

                            <button className="history-close-button js-history-close"
                             onClick={()=>setMonthlyHistory(false)}
                            >
                                &times;
                            </button>

                        </div>


                        
                        <div className="history-box">

                           
                            <div className="history-table-header">
                                <span>MONTH</span>
                                <span>HOURS</span>
                                <span>SALARY</span>
                            </div>

                          {<LastSixMonths employ={employ} />}

                        </div>

                    </div>

                </div>     
        </div>
    )
}
function  LastSixMonths ({employ}) {

    let months = ["January","February","March","April","May","June","July","August","September",
        "October","November","December"
     ];

    // creating last 6 months names
    let curentMonth=new Date().getMonth()
    let curentYear=new Date().getFullYear()
    let SixMonthsArray=[];
    for (let i = 1; i <= 6 ; i++) {
        let month=new Date(curentYear , curentMonth-i)
        let formatedDate=months[month.getMonth()]

        SixMonthsArray.push(formatedDate)
    };

    // making dates of every month
   
    
    let monthlyDaysNUM=1

     return(
        <>
        {
          SixMonthsArray.map((Month)=>{
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
                TotalMonthlyHours+=Number(employ.Hours?.[String(date)] || 0)
                YearOFMonth=new Date(date).getFullYear();           
            })

            // Calcuting all Monthly salaries
           let MonthlySalary=TotalMonthlyHours*Number(employ.hourleyWage)
            
                return(
                    <div className="history-month-row" key={Month}>

                        <div className="month-info">
                            <strong>{Month}</strong>
                            <span>{YearOFMonth}</span>
                        </div>

                        <div className="hours-info">
                            <strong>{TotalMonthlyHours}</strong>
                            <span>hrs</span>
                        </div>

                        <div className="salary-info">
                            <strong>PKR {MonthlySalary} </strong>
                        </div>

                    </div>
                )
           })
        }
        </>
         
     )
}

export default MonthlyHistory