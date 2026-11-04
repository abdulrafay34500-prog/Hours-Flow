import './CSS-Files/employes.css'
import employImg from './logo&Img/employ.png'
import clockImg from './logo&Img/clock.png'
import currencyImg from './logo&Img/rupee.png'
import { useState ,useEffect  } from 'react'
function EmployeePage() {
    let [employes ,setEmployes]=useState([])

    useEffect(()=>{
        fetch('https://hours-flow-backend.vercel.app/api/employes',{
               credentials: 'include'
        }).then((responce)=>{ return responce.json})
        .then((json)=>{setEmployes(json)})
    })

    console.log(employes)

    return(
        <main class="main-addingEmploy-page">

            <div className="combining-AddingAndSingle-Employ-div  js-combining-AddingAndSingle-Employ-div">
                <div className="Adding-Employe-main-div">
                    <div className="Employe-main-header">
                        <div className="header-text-div">
                            <p className="employes-text">Employees</p>
                            <p className="manage-team-text">Manage your team members and their details</p>

                        </div>
                        <button className="add-button js-add-employ-button">
                            + Add Employe 
                        </button>
                    </div>
                    <div className="employ-hours-payroll-div">
                        <div className="Total-employ-div">
                            <img className="employ-icon" src={employImg}/>
                            <p className="total-employ-text">Total Employes</p>
                            <p className="Employe-numbers js-Employe-numbers">0</p>
                        </div>
                        <div className="Total-Hours-div">
                            <img className="clock-icon" src={clockImg}/>
                            <p className="total-Hours-text">Total Hours (This Month)</p>
                            <p className="Total-hours-numbers js-Total-hours-numbers">0</p>
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
                                <div class="employ-detail js-employ-detail-click">
                                    <div class="ID">
                                        307
                                    </div>
                                    <div class="Employ-name">
                                        Rafay
                                    </div>
                                    <div class="shift-type">
                                        Morning
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
               
                <div className="Single-employ-detail js-Single-employ-detail">



                </div>

            </div>

            <div className="AddingEmploye-main-page js-AddingEmploye-main-page">
                    
            </div>
           
            <div className="delete-popup js-delete-popup">

            </div>
           
            <div  className="js-history-page-popup">
                
            </div>

        </main>
    )
}

export default EmployeePage;