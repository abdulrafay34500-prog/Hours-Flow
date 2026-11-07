import Header from './components/Header'
import SideBar from './components/SideBar'
import './CSS-Files/weekley-overview.css'
import { useEffect ,useState } from 'react'

function WeekleyReport() {
    let [employes ,setEmployes]=useState([]);
    let [employTimeSheet ,setEmployTimeSheet]=useState([]);

    useEffect(()=>{
       fetch('https://hours-flow-backend.vercel.app/api/employes',{
               credentials: 'include'
        }).then((responce)=>{ return responce.json()})
        .then((json)=>{setEmployes(json)});

        fetch('https://hours-flow-backend.vercel.app/api/timeSheet',
        {
            credentials: 'include'
        }).then((responce)=>responce.json())
        .then((json)=>{setEmployTimeSheet(json)})
    },[])

    let num=[1,2,3,4,5]
    return(
        <>
        <Header />
        <SideBar />
         <div className="Weekley-overview-main-div">
                    <div className="week-buttons-div">
                        <div>
                           <button className="Previous-Next-button js-previous-button">Previous week</button>
                           <button  className="Previous-Next-button js-Next-button">Next week</button>
                        </div>
                        
                        <p className="GoingMonth-Text jsGoingMonth-Text">
                            September Report 
                        </p>
                        <div className="menu-container">
                            <button className="three-dots">⋮</button>

                            <div className="dropdown-menu">
                                <button className="js-WeekeyReport-Button">Make Weekley Report</button>
                                <button>View Details</button>
                                <button>Delete</button>
                            </div>
                        </div>
                       
                    </div>
                    <div className="Weekley-overview-header js-Weekley-overview-header">
                        
                    </div>
                    <div className="Weekley-report-main-div  js-Weekley-report-main-div">

                         {num.map((employ)=>(
                                  <div  key={employ.id}  >
                                     <HoursInWeekleyReport/>
                                  </div>
                               ))
                        }
                    </div>
                    
                    <div className="shared-weekley-report-background">
                            <div class="report-container js-sharing-weekley-report-container">
                               
                                 

                            </div>                
                    </div> 

            </div>
        </>
    )
}

function HoursInWeekleyReport() {
return(
    
<div className="Every-employ-details js-Every-employ-details-${Employe.Id}">
    <div className="employ-name">name</div>
    <input type="number" className="days-hours js-days-hours" data-day='0' />
    <input type="number" className="days-hours js-days-hours" data-day='1'  />
    <input type="number" className="days-hours js-days-hours" data-day='2'  />
    <input type="number" className="days-hours js-days-hours" data-day='3' />
    <input type="number" className="days-hours js-days-hours" data-day='4'  />
    <input type="number" className="days-hours js-days-hours" data-day='5'  />
    <input type="number" className="days-hours js-days-hours" data-day='6'  />
    <div>T H</div>  
</div>
    
)
}

export default WeekleyReport;