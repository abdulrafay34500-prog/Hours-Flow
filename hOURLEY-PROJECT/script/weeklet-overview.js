import { Employes } from "../data/employes.js";



console.log(Employes)


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
    <div class="mon-hour">${Employe.Days.mon}</div>
    <div class="tue-hour">${Employe.Days.tue}</div>
    <div class="wed-hour">${Employe.Days.wed}</div>
    <div class="thu-hour">${Employe.Days.thu}</div>
    <div class="fri-hour">${Employe.Days.fri}</div>
    <div class="sat-hour">${Employe.Days.Sat}</div>
    <div class="sun-hour">${Employe.Days.Sun}</div>
    <div>${TotalHours}</div>   
</div>`
})

document.querySelector('.js-Weekley-report-main-div')
.innerHTML=WeekleyReportHTML;



