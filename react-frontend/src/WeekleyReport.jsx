import Header from './components/Header'
import SideBar from './components/SideBar'
import './CSS-Files/weekley-overview.css'
import { useEffect ,useState } from 'react'
import ShareWeekleyReport from './components/ShareWeekleyReport'
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

function WeekleyReport() {
    let [employes ,setEmployes]=useState([]);
    let [employTimeSheet ,setEmployTimeSheet]=useState([]);
    let [goingWeek , setGoingWeek]=useState(0)
    let [optionsButton , setOptionsButton]=useState(false)
    let [weekleyReport , setWeekleyReport]=useState(false)

     let FetchingData = async () => {
     try {
        let employResponse = await fetch(
            'https://hours-flow-backend.vercel.app/api/employes',
            { credentials: 'include' }
        );

        let employData = await employResponse.json();

        let hoursResponse = await fetch(
            'https://hours-flow-backend.vercel.app/api/timeSheet',
            { credentials: 'include' }
        );

        let hoursData = await hoursResponse.json();

        setEmployes(employData);
        setEmployTimeSheet(hoursData);

        } catch (error) {
            console.log(error);
        }
     };
    useEffect(()=>{
       FetchingData()
    },[])
   employes.sort((a, b) => {
        if (a.shiftType === b.shiftType) return 0;

        return a.shiftType === 'Morning' ? -1 : 1;
    });

    // Getting Current WeekDays
    let startingDay=new Date()
    let day=startingDay.getDay()
    let diffrence= day ==0? -6:  1-day;
    startingDay.setDate(startingDay.getDate() + diffrence) 
    startingDay.setDate(startingDay.getDate() + (goingWeek *7))

    let weekDays=[];

    for(let i=0;i<7;i++){
        let date=new Date(startingDay)
        date.setDate(date.getDate()+i)
        let formattedDate =
            date.getFullYear() + '-' +
            String(date.getMonth() + 1).padStart(2, '0') + '-' +
            String(date.getDate()).padStart(2, '0');
        weekDays.push(formattedDate)
    }
    
    //////////////////////////////
    //Getting Going On Month
     let date=new Date(weekDays[0])
     let GoingMonth=`${months[date.getMonth()]} Report `
   //////////////////////////////
    let employWithHours=employes.map((employ)=>{
       let employHours={}

       employTimeSheet.forEach((hoursSheet)=>{
         if(employ.id== hoursSheet.employID){
            employHours[hoursSheet.date]=hoursSheet.hours
         }

       })
        return{
            ...employ,
            Hours: employHours
         }

    })

    return(
        <>
        <Header />
        <SideBar />
         <div className="Weekley-overview-main-div">
                    <div className="week-buttons-div">
                        <div>
                           <button className="Previous-Next-button js-previous-button"
                            onClick={()=>setGoingWeek(goingWeek - 1 )}
                            >Previous week
                           </button>
                           <button  className="Previous-Next-button js-Next-button"
                             onClick={()=>setGoingWeek(goingWeek + 1 )}
                           >
                            Next week
                           </button>
                        </div>
                        
                        <p className="GoingMonth-Text jsGoingMonth-Text">
                            {GoingMonth}
                        </p>
                        <div className="menu-container">
                            <button className="three-dots"  
                             onClick={() => setOptionsButton(true)}
                             >⋮</button>

                           {optionsButton && <div className="dropdown-menu" 
                               onMouseLeave={() => setOptionsButton(false)}
                           >
                                <button onClick={()=>{
                                    FetchingData().then(()=>{
                                        setWeekleyReport(true)
                                    })           
                                }
                                }>Make Weekley Report</button>
                            </div>}
                        </div>
                       
                    </div>
                    <div className="Weekley-overview-header js-Weekley-overview-header">
                         <p>Employee</p>
                         {weekDays.map((weekleyDate)=>{
                            let date=new Date(weekleyDate)
                            return(
                              <p key={weekleyDate}>{dayNames[date.getDay()]}  {date.getDate()}</p>
                            )
                           
                         })}
                        <p>Total Hours</p>
                    </div>
                    <div className="Weekley-report-main-div  js-Weekley-report-main-div">

                         {employWithHours.map((employ)=>(
                                  <div  key={employ.id}  >
                                     <HoursInWeekleyReport employ={employ} weekDays={weekDays} fetchingData={FetchingData}/>
                                  </div>
                               ))
                        }
                    </div>
                    
                    {weekleyReport && <ShareWeekleyReport employes={employWithHours} weekDays={weekDays} 
                      months={months} dayNames={dayNames} crossWeekleyReport={setWeekleyReport}
                    />}

            </div>
        </>
    )
}

function HoursInWeekleyReport({employ , weekDays , fetchingData}) {

    let [currentEmployHours ,setCurrentEmployHours]=useState(employ.Hours ?? {})

    useEffect(() => {
    setCurrentEmployHours(employ.Hours);
    }, [employ.Hours]);

    let TotalHours=0
    weekDays.forEach((dates)=>{
          TotalHours+=Number(currentEmployHours[dates] ?? 0)
    })
    let SubmitingHours=async(employ ,dayIndex ,e )=>{
       let date=weekDays[dayIndex] 
       setCurrentEmployHours((prev) => ({
            ...prev,
            [date]: e.target.value
        })); 

    }

    let SavingToBackend=async(employ , dayIndex)=>{
       let date=weekDays[dayIndex]
       let hours=currentEmployHours[date] || 0

       try{

            let HoursAndDate={
                date,hours
            }
            let response = await fetch(`https://hours-flow-backend.vercel.app/api/timeSheet/${employ.id}/updatingHours` , {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials: 'include',
                body:JSON.stringify(HoursAndDate)
            })

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

        }catch(error){
            console.log(error.message)
        }

        
    }
 
return(  
<div className="Every-employ-details js-Every-employ-details-${Employe.Id}">
    <div className="employ-name">{employ.name}</div>
        {weekDays.map((date, index) => (
            <input
                key={date}
                type="number"
                className="days-hours"
                onChange={(e) =>{ SubmitingHours(employ, index, e)}}
                onBlur={() => {SavingToBackend(employ , index  )}}
                placeholder={employ.Hours [date] ?? ''}
            />
        ))}
    <div>{TotalHours}</div>  
</div>
    
)
}

export default WeekleyReport;