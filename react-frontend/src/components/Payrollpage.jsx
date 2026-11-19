import SideBar from './SideBar'
import Header from './Header'
import '../CSS-Files/payroll.css'
import { useEffect , useState} from 'react'
let months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
    ];

function Payrollpage() {
    let [employes ,setEmployes]=useState([]);
    let [employTimeSheet ,setEmployTimeSheet]=useState([]);
    let [totalMonthlyHours , setTotalMonthlyHours]=useState(0);
    let [monthlyDates ,setMonthlyDates]=useState([])

    let fetchData=async()=>{
        try{
            let [employesResponce , monthlyHoursResponce , timeSheetResponce]=
            await Promise.all([
                fetch('https://hours-flow-backend.vercel.app/api/employes', {
                        credentials: 'include'
                    }),
                fetch('https://hours-flow-backend.vercel.app/api/timeSheet/TotalMonthlyHours', {
                    credentials: 'include'
                }),
                fetch('https://hours-flow-backend.vercel.app/api/timeSheet', {
                    credentials: 'include'
                })
            ])

            let [employes , monthlyHours ,timeSheet]=
            await Promise.all([
                employesResponce.json(),
                monthlyHoursResponce.json(),
                timeSheetResponce.json(),
            ])

            setEmployes(employes)
            setTotalMonthlyHours(monthlyHours)
            setEmployTimeSheet(timeSheet)


        }catch(err){
           console.log(err.message)
        }
    }

    useEffect(()=>{
        fetchData()
         selectingMonth({month:months[month] , year:year})
    },[])



    // Merging Employes with timeSheet

    let employesWithSheet=employes.map((employ)=>{
        let emplployHours={}

        employTimeSheet.forEach((hourSheet)=>{
            if(employ.id==hourSheet.employID){
               emplployHours[hourSheet.date]=hourSheet.hours
            }
        })
        
        return({
            ...employ,
           hours:emplployHours
        })
    })

     
    // Making  Last 6  Months 
    let  last6Months=[]
     let currentDate=new Date()
    for(let i =0 ; i < 6 ; i ++){
       let passDate= new Date(currentDate.getFullYear(),currentDate.getMonth()-i, 1)

       last6Months.push({month :months[passDate.getMonth()] , year :passDate.getFullYear()})
    }
    

    // Selecting Month Function
    let today=new Date()
    let year=today.getFullYear()
    let month=today.getMonth()
    
    let selectingMonth=(selectedmonth)=>{
        
        // Making Current Month All Dates

        let monthIndex=months.indexOf(selectedmonth.month)

        let numberOfDays=new Date(selectedmonth.year , monthIndex+1 , 0).getDate()
        let allDates=[]
        for(let days=1; days <= numberOfDays ; days++){
            let date=new Date(selectedmonth.year , monthIndex , days)

            let formatedDate=date.getFullYear() + '-' +
            String(date.getMonth()+1).padStart('2' , 0) + '-' +
            String(date.getDate()).padStart('2' , 0)

            allDates.push(formatedDate)
        }

        setMonthlyDates(allDates)
    }
    
   
    // Generating All employes MonthlyTotal Payroll
    let MonthlyPayroll=0
    monthlyDates.forEach((dates)=>{
        employesWithSheet.forEach((employ)=>{
           MonthlyPayroll+=(employ.hours[dates] || 0)*Number(employ.hourleyWage)
        })
    })

    // Calculating Average Salary Of Total Payroll
    let AverageSalary=MonthlyPayroll / employesWithSheet.length


    return(
        <>
        <Header/>
        <SideBar/>

        <div className="payroll-container-payrollPage">

            <div className="payroll-header">
                <div>
                    <h1>Payroll Management</h1>
                    <p>Manage employee salaries and payments</p>
                </div>

                <select className="month-select" onChange={(e)=>{
                     let selectedDate=last6Months[e.target.value];
                     selectingMonth(selectedDate)
                }}>
                    {last6Months.map((date , index)=>(  
                        <option key={index} value={index} >{date.month} {date.year}</option>
                    ))}
                </select>
            </div>

            <div className="payroll-cards">

                <div className="payroll-card">
                    <div className="card-top">
                        <span>Total Monthly Payroll</span>
                        <div className="card-icon">PKR</div>
                    </div>
                    <h2> {MonthlyPayroll.toLocaleString('en-GB')}</h2>
                    <p>Total employee salaries</p>
                </div>

                <div className="payroll-card">
                    <div className="card-top">
                        <span>Employees Paid</span>
                        <div className="card-icon">✓</div>
                    </div>
                    <h2>18</h2>
                    <p>Successfully paid employees</p>
                </div>

                <div className="payroll-card">
                    <div className="card-top">
                        <span>Pending Payments</span>
                        <div className="card-icon">!</div>
                    </div>
                    <h2>5</h2>
                    <p>Payments awaiting completion</p>
                </div>

                <div className="payroll-card">
                    <div className="card-top">
                        <span>Average Salary</span>
                        <div className="card-icon">PKR</div>
                    </div>
                    <h2>{AverageSalary.toLocaleString('en-GB')}</h2>
                    <p>Average monthly salary</p>
                </div>

            </div>

            <div className="payroll-table-container">

                <div className="table-header">
                    <div>
                        <h2>Employee Payroll</h2>
                        <p>Monthly salary breakdown for employees</p>
                    </div>

                    <input
                        type="text"
                        placeholder="Search employee..."
                        className="payroll-search"
                    />
                </div>

                <div className="table-scroll">
                    <table className="payroll-table">

                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Working Hours</th>
                                <th>Hourly Wage</th>
                                <th>Total Salary</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                        {employesWithSheet.map((employ)=>(
                           <EmployesList  key={employ.id} employ={employ} monthlyDates={monthlyDates} />
                        ))}                           
                        </tbody>

                    </table>
                </div>

            </div>

        </div>

        </>
    )
}

function EmployesList({employ ,monthlyDates}) {

    // Calculating Single employ Monthly Hours
       let TotalMonthlyHours=0
        monthlyDates.forEach((dates)=>{
           TotalMonthlyHours+=employ.hours[dates] || 0
        })

    // Calculating Single employ Monthly Salary
      let currentMonthSalary=Number(TotalMonthlyHours *employ.hourleyWage)

    // Getting First Alphabet Of name
    let initialLetter=employ.name.split('')[0].toUpperCase()
    return(
        <tr key={employ.id}>
            <td>
                <div className="employee-info">
                    <div className="employee-avatar">{initialLetter}</div>
                    <span>{employ.name}</span>
                </div>
            </td>
            <td>{TotalMonthlyHours}</td>
            <td>{employ.hourleyWage} PKR</td>
            <td className="salary">PKR {currentMonthSalary.toLocaleString('en-GB')}</td>
            <td>
                <span className="status paid">Paid</span>
            </td>
            <td>
                <button className="view-button">View</button>
            </td>
        </tr>
    )
}
export default Payrollpage