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
    <input class="mon-hour days-hours" value='${Employe.Days.mon}'></input>
    <input class="tue-hour days-hours" value='${Employe.Days.mon}'></input>
    <input class="wed-hour days-hours" value='${Employe.Days.mon}'></input>
    <input class="thu-hour days-hours" value='${Employe.Days.mon}'></input>
    <input class="fri-hour days-hours" value='${Employe.Days.mon}'></input>
    <input class="sat-hour days-hours" value='${Employe.Days.mon}'></input>
    <input class="sun-hour days-hours" value='${Employe.Days.mon}'></input>
    <div>${TotalHours}</div>   
</div>`
})

document.querySelector('.js-Weekley-report-main-div')
.innerHTML=WeekleyReportHTML;



