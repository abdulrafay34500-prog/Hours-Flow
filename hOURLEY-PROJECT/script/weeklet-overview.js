import { Employes ,updatingWeekleyHours } from "../data/employes.js";

let startingDay=new Date()

let day=startingDay.getDay()

let diffrence= day ==0? -6:  1-day;

startingDay.setDate(startingDay.getDate() + diffrence)


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



rendringWeekleyOverview()
function rendringWeekleyOverview() {
    
    let WeekleyReportHTML='';
    let weekDaysHTML='';

    let weekleyHeader='<p class="Employ-header-text">Employess</p>';

    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekDays.forEach((days ,i)=>{
        let date=new Date(days)
        
    
    
    weekDaysHTML+=`<p>${dayNames[date.getDay()]} ${date.getDate()}</p> `
    })
    weekleyHeader+=weekDaysHTML

    Employes.forEach((Employe ,index)=>{

        let TotalHours=0;

        weekDays.forEach((days)=>{
            TotalHours+=Employe.Hours[days] || 0
        })
        
       

    WeekleyReportHTML+=`
    <div class="Every-employ-details js-Every-employ-details-${Employe.Id}">
        <div class="employ-name">${Employe.Name}</div>
        <input type="number" class="days-hours js-days-hours" data-day='0'  data-employ-id='${Employe.Id}' value='${Employe.Hours[weekDays[0]] || 0}'>
        <input type="number"  class="days-hours js-days-hours" data-day='1' data-employ-id='${Employe.Id}' value='${Employe.Hours[weekDays[1]] || 0}'>
        <input type="number"  class="days-hours js-days-hours" data-day='2' data-employ-id='${Employe.Id}' value='${Employe.Hours[weekDays[2]] || 0}' >
        <input type="number" class="days-hours js-days-hours" data-day='3'  data-employ-id='${Employe.Id}' value='${Employe.Hours[weekDays[3]] || 0}' >
        <input type="number" class="days-hours js-days-hours" data-day='4'  data-employ-id='${Employe.Id}' value='${Employe.Hours[weekDays[4]] || 0}' >
        <input type="number" class="days-hours js-days-hours" data-day='5'  data-employ-id='${Employe.Id}' value='${Employe.Hours[weekDays[5]] || 0}' >
        <input type="number" class="days-hours js-days-hours" data-day='6'  data-employ-id='${Employe.Id}' value='${Employe.Hours[weekDays[6]] || 0}' >
        <div>${TotalHours}</div>  
    </div>`
    })

    document.querySelector('.js-Weekley-report-main-div')
    .innerHTML=WeekleyReportHTML;

    document.querySelector('.js-Weekley-overview-header')
    .innerHTML=weekleyHeader;
    
    let SaveInput =document.querySelectorAll('.js-days-hours')
  
    SaveInput.forEach((SaveInput)=>{
         SaveInput.addEventListener('change',()=>{
            
             let EmployId=SaveInput.dataset.employId
             let dayIndex=SaveInput.dataset.day
             let date=weekDays[dayIndex]
             let hours = Number(SaveInput.value);
             let employe=Employes.find((employ)=> employ.Id==EmployId)

             employe.Hours[date]=hours
  
         
             
             localStorage.setItem('EmployDetails' , JSON.stringify(Employes))

              rendringWeekleyOverview()
         })
    })
}

