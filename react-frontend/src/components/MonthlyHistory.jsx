import '../CSS-Files/historyPage.css'

function MonthlyHistory({setMonthlyHistory}) {
    return(
        <div  className="js-history-page-popup">
            <div className="history-popup-overlay js-history-popup">

                    <div className="history-popup">

                        <div className="history-header">

                            <div>
                                <p className="history-label">EMPLOYEE HISTORY</p>
                                <h2>$</h2>
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

                          ${<LastSixMonths />}

                        </div>

                    </div>

                </div>     
        </div>
    )
}
function  LastSixMonths () {
     return(
         <div className="history-month-row">

            <div className="month-info">
                <strong>Month</strong>
                <span>$YearOFMonth</span>
            </div>

            <div className="hours-info">
                <strong>$TotalMonthlyHours</strong>
                <span>hrs</span>
            </div>

            <div className="salary-info">
                <strong>PKR $MonthlySalary</strong>
            </div>

        </div>
     )
}

export default MonthlyHistory