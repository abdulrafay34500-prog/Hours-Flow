import { Employes } from "../data/employes.js";


rendringWeekleyOverview()
function rendringWeekleyOverview() {
    
    let WeekleyReportHTML='';
    let TotalHours=0;

    Employes.forEach((Employe ,index)=>{

        let TotalHours=0;
        
        Object.values(Employe.Days).forEach((days)=>{
            TotalHours+=days
        })

    WeekleyReportHTML+=`
    <div class="Every-employ-details">
        <div class="employ-name">${Employe.Name}</div>
        <input class="days-hours js-days-hours" data-day='0' data-employ-hour=${Employe.Days.mon}  data-employ-id='${Employe.Id}' value='${Employe.Days.mon}'>
        <input class="days-hours js-days-hours" data-day='1'' data-employ-hour=${Employe.Days.tue}  data-employ-id='${Employe.Id}' value='${Employe.Days.tue}'>
        <input class="days-hours js-days-hours" data-day='2' data-employ-hour=${Employe.Days.wed}  data-employ-id='${Employe.Id}' value='${Employe.Days.wed}'>
        <input class="days-hours js-days-hours" data-day='3' data-employ-hour=${Employe.Days.thu}  data-employ-id='${Employe.Id}' value='${Employe.Days.thu}'>
        <input class="days-hours js-days-hours" data-day='4'data-employ-hour=${Employe.Days.fri}  data-employ-id='${Employe.Id}' value='${Employe.Days.fri}'>
        <input class="days-hours js-days-hours" data-day='5' data-employ-hour=${Employe.Days.Sat}  data-employ-id='${Employe.Id}' value='${Employe.Days.Sat}'>
        <input class="days-hours js-days-hours" data-day='6' data-employ-hour=${Employe.Days.Sun}  data-employ-id='${Employe.Id}' value='${Employe.Days.Sun}'>
        <div>${TotalHours}</div>   
    </div>`
    })

    document.querySelector('.js-Weekley-report-main-div')
    .innerHTML=WeekleyReportHTML;
    
    let HoursInput =document.querySelectorAll('.js-days-hours')
    HoursInput.forEach((inputBotton)=>{
         inputBotton.addEventListener('click',()=>{
             let EmployId=inputBotton.dataset.employId
             let Hours=inputBotton.dataset.employHour
             let day=inputBotton.dataset.day
             
             updatingWeekleyHours(EmployId ,Hours,day)
         })
    })
}

function updatingWeekleyHours(EmployId ,Hours,day) {

    let currentUpdatingEmploy;
    let updatingDay;

    Employes.forEach((employ)=>{
        if(employ.Id == EmployId){
            currentUpdatingEmploy=employ
        }
        
        
    })
   
    let updatingDayArray=Object.values(currentUpdatingEmploy.Days)
    
    
    console.log(updatingDayArray[day],(currentUpdatingEmploy.Name))
}