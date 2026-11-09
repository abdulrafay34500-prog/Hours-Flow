import { useState } from 'react';
import '../CSS-Files/singleEmployDetail.css'
import weekDays from '../commonFun/gettingWeekleyDates'
import monthDays from '../commonFun/gettingMonthlydates'
import EditEmploy from './EditEmploy'
import MonthlyHistory from './MonthlyHistory'
import { useNavigate } from 'react-router-dom'


function SingleemployDetail({setSingleEmployPopup , employ , hoursSheet , fetchFromBackend}) {
    const navigate = useNavigate()
    let [deletePop , setDeletePop]=useState(false)
    let [editEmployPage , setEditEmployPage]=useState(false)
     let [monthlyHistory , setMonthlyHistory]=useState(false)

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
                <strong>PKR {employ.hourleyWage} / hour</strong>
            </div>
        </div>

        <div className="edit-delete-button-div">
             <button className="edit-button js-edit-button" onClick={()=>setEditEmployPage(true)}>Edit</button>          
            <button className="History-button js-History-button" onClick={()=>setMonthlyHistory(true)} >History</button>
            <button className="delete-button js-delete-button" onClick={()=>setDeletePop(true)}>Delete</button>
        </div>

        {monthlyHistory && <MonthlyHistory setMonthlyHistory={setMonthlyHistory} employ={employ} />}

        {
        deletePop && <DeletePopUp setDeletePop={setDeletePop} employ={employ} fetchFromBackend={fetchFromBackend} />     
        }

         {editEmployPage && <div style={{ display: editEmployPage ? 'block' : 'none' }}>
            <EditEmploy setEditEmployPage={setEditEmployPage} SingleEmploy={employ}/>
        </div>}

    </div>
   )
}
function DeletePopUp({setDeletePop ,employ ,fetchFromBackend}) {
    const navigate = useNavigate()
   let deleteEmployFun=async()=>{
        try{
            let responce =await fetch(`https://hours-flow-backend.vercel.app/api/employes/${employ.id}/delete` ,{
                        method: 'DELETE',
                        credentials: 'include'
                    })

            await fetch(`https://hours-flow-backend.vercel.app/api/timeSheet/${employ.id}/delete` ,{
                        method: 'DELETE',
                        credentials: 'include'
                    }) 
            console.log(responce.status)  
            if(responce.status== 200){
                fetchFromBackend().then(()=>{
                    setDeletePop(false)
                })
              navigate('/employesPage')
            } 
     
        }catch(err){
           console.log(err.message)
        }
   }
    return(
        <div className="delete-popup js-delete-popup">
            <div className="delete-popup-box">
                <h2>Delete Employee?</h2>
                <p>Are you sure you want to Remove {employ.name} ?</p>
                <p className="delete-warning">
                    This action cannot be undone.
                </p>
                <div className="delete-popup-buttons">
                    <button className="cancel-delete-button js-cancel-delete"
                    onClick={()=>setDeletePop(false)}
                    >
                        Cancel
                    </button>
                    <button className="confirm-delete-button js-confirm-delete" 
                     onClick={()=>deleteEmployFun()}
                    >
                        Delete
                    </button>
                </div>
           </div>
        </div>
    )
}
export default SingleemployDetail;