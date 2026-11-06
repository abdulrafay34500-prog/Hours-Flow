import './CSS-Files/employes.css'
import employImg from './logo&Img/employ.png'
import clockImg from './logo&Img/clock.png'
import currencyImg from './logo&Img/rupee.png'
import { useState ,useEffect  } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Link } from 'react-router-dom'
import SingleemployDetail from './components/SingleemployDetail'

function EmployeePage() {
    let [employes ,setEmployes]=useState([]);
    let [employTimeSheet ,setEmployTimeSheet]=useState([]);
    let [totalMonthlyHours , setTotalMonthlyHours]=useState(0);
    let [ singleEmployPopup , setSingleEmployPopup ]=useState(false);
     let [ selectEmploy , setSelectEmploy]=useState(null);

    useEffect(()=>{
        fetch('https://hours-flow-backend.vercel.app/api/employes',{
               credentials: 'include'
        }).then((responce)=>{ return responce.json()})
        .then((json)=>{setEmployes(json)})

        fetch('https://hours-flow-backend.vercel.app/api/timeSheet/TotalMonthlyHours',
        {
            credentials: 'include'
        }).then((responce)=>responce.json())
        .then((json)=>{setTotalMonthlyHours(json)})

        fetch('https://hours-flow-backend.vercel.app/api/timeSheet',
        {
            credentials: 'include'
        }).then((responce)=>responce.json())
        .then((json)=>{setEmployTimeSheet(json)})
    },[]);



    employes.sort((a)=>{
        return a.shiftType=='Morning'?-1 : 1
    });

    return(
        <>
        <Header />
        <SideBar />
        <main className="main-addingEmploy-page">

            <div className="combining-AddingAndSingle-Employ-div  js-combining-AddingAndSingle-Employ-div">
                <div className="Adding-Employe-main-div">
                    <div className="Employe-main-header">
                        <div className="header-text-div">
                            <p className="employes-text">Employees</p>
                            <p className="manage-team-text">Manage your team members and their details</p>

                        </div>
                        <Link to='/addingEmploypage'>
                           <button className="add-button js-add-employ-button">
                            + Add Employe 
                          </button>
                        </Link>                  
                    </div>
                    <div className="employ-hours-payroll-div">
                        <div className="Total-employ-div">
                            <img className="employ-icon" src={employImg}/>
                            <p className="total-employ-text">Total Employes</p>
                            <p className="Employe-numbers js-Employe-numbers">{employes.length || 0}</p>
                        </div>
                        <div className="Total-Hours-div">
                            <img className="clock-icon" src={clockImg}/>
                            <p className="total-Hours-text">Total Hours (This Month)</p>
                            <p className="Total-hours-numbers js-Total-hours-numbers">{totalMonthlyHours}</p>
                        </div>
                        <div className="Total-Payroll-div">
                            <img className="currency-icon" src={currencyImg}/>
                            <p className="total-Payroll-text">Total Payroll (This Month)</p>
                            <p className="monthly-Payroll-Amount js-monthly-Payroll-Amount">0</p>
                        </div>
                    </div>
                    <div className="Employe-Details-main-div">
                        <div className="Employer-Details-mainHeader">
                            <p className="Employ-id">ID</p>
                            <p className="Employ-namee">Employ Name</p>
                            <p className="Employ-ShiftTypee">Shift Type</p>
                        </div>
                        <div className="added-Employes-details js-added-Employes-details">
                            {employes.map((employ)=>(
                                 <div key={employ.id} className="employ-detail js-employ-detail-click"
                                  onClick={()=>{setSingleEmployPopup(true) ; setSelectEmploy(employ)}}
                                 >
                                    <div className="ID">
                                        {employ.id}
                                    </div>
                                    <div className="Employ-name">
                                        {employ.name}
                                    </div>
                                    <div className="shift-type">
                                        {employ.shiftType}
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
               
                {singleEmployPopup  && <SingleemployDetail setSingleEmployPopup={setSingleEmployPopup}
                 employ={selectEmploy} hoursSheet={employTimeSheet}
                />}

            </div>

            
           
            <div className="delete-popup js-delete-popup">

            </div>
           
            <div  className="js-history-page-popup">
                
            </div>

        </main>
        </>
    )
}

export default EmployeePage;