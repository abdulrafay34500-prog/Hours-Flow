import { Employes } from "../data/employ-hours.js";






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
    <div class="weekley-hours">
        <div class="mon-hour">${Employe.Days.mon}</div>
        <div class="mon-hour">${Employe.Days.tue}</div>
        <div class="mon-hour">${Employe.Days.wed}</div>
        <div class="mon-hour">${Employe.Days.thu}</div>
        <div class="mon-hour">${Employe.Days.fri}</div>
        <div class="mon-hour">${Employe.Days.Sat}</div>
        <div class="mon-hour">${Employe.Days.Sun}</div>
        <div>${TotalHours}</div>
    </div>
</div>`
})

document.querySelector('.js-Weekley-report-main-div')
.innerHTML=WeekleyReportHTML;



