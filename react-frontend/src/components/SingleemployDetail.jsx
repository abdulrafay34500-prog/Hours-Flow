import { useState } from 'react';
import '../CSS-Files/singleEmployDetail.css'
import weekDays from '../commonFun/gettingWeekleyDates'
import monthDays from '../commonFun/gettingMonthlydates'
import { Link , useNavigate } from 'react-router-dom'
import EditEmploy from './EditEmploy'


function SingleemployDetail({setSingleEmployPopup , employ , hoursSheet}) {
    let [deletePop , setDeletePop]=useState(false)
    let [editEmployPage , setEditEmployPage]=useState(false)

    let name=employ.name

   let initials=name.split(' ')
    .map((l)=>{
       return l[0]
    }).join("")

    employ.Hours ??= {};
    hoursSheet.forEach((hours)=>{
        if(hours.employID==employ.id){
           employ.Hours[hours.date]=hours.hours
        }   
    });


    // getting weekley total Hours
    let totalWeekleyHours=0;
    weekDays.forEach((days)=>{
       totalWeekleyHours+=employ.Hours[days]  || 0
    });
 

     // getting weekley total Hours
    let totalMonthlyHours=0;
    monthDays.forEach((days)=>{
       totalMonthlyHours+=employ.Hours[days]  || 0
    });

    return(
    <div className="Single-employ-detail js-Single-employ-detail">
        <button className="Cross-sign-button js-Cross-sign-button" onClick={()=>setSingleEmployPopup(false)}>
            ✕
        </button>

        <div className="employee-header">
            <div className="employee-avatar">{initials}</div>

            <div className="employee-header-info">
                <h2>{employ.name}</h2>
                <p className="Employee-Id">Employee ID: <span>{employ.id}</span></p>
                <p className="Position"> </p>
            </div>
        </div>

        <div className="employee-hours">
            <div className="hours-box">
                <span className="hours-label">Hours This Week</span>
                <strong>{totalWeekleyHours} <small>hrs</small></strong>
            </div>

            <div className="hours-box">
                <span className="hours-label">Hours This Month</span>
                <strong>{totalMonthlyHours}<small>hrs</small></strong>
            </div>
        </div>
        <div className="salary-div">
                <span className="Salary-label">This Month Salary so far</span>
                <strong>{Number(totalMonthlyHours*employ.hourleyWage)} <small>PKR</small></strong>
        </div>

        <div className="employee-info-section">
            <h3>Employee Information</h3>

            <div className="info-row">
                <span>Email</span>
                <strong>{employ.email}</strong>
            </div>

            <div className="info-row">
                <span>Phone No</span>
                <strong>{employ.PhoneNo}</strong>
            </div>

            <div className="info-row">
                <span>Date Joined</span>
                <strong>{employ.joiningDate}</strong>
            </div>

            <div className="info-row">
                <span>Hourly Rate</span>
                <strong>PKR ${employ.hourleyWage} / hour</strong>
            </div>
        </div>

        <div className="edit-delete-button-div">
            <Link onClick={()=>setEditEmployPage(true)}>
             <button className="edit-button js-edit-button">Edit</button>
            </Link>
            <button className="History-button js-History-button" >History</button>
            <button className="delete-button js-delete-button">Delete</button>
        </div>`;

        {
        deletePop &&     
            <div className="delete-popup-box">
                <h2>Delete Employee?</h2>
                <p>Are you sure you want to Remove ?</p>
                <p className="delete-warning">
                    This action cannot be undone.
                </p>
                <div className="delete-popup-buttons">
                    <button className="cancel-delete-button js-cancel-delete">
                        Cancel
                    </button>
                    <button className="confirm-delete-button js-confirm-delete" 
                
                    >
                        Delete
                    </button>
                </div>
        </div>
        }

         <div style={{ display: editEmployPage ? 'block' : 'none' }}>
            <EditEmploy setEditEmployPage={setEditEmployPage} SingleEmploy={employ}/>
        </div>

    </div>
   )
}

export default SingleemployDetail;