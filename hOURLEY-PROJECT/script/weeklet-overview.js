import { Employes ,updatingWeekleyHours } from "../data/employes.js";


rendringWeekleyOverview()
function rendringWeekleyOverview() {
    
    let WeekleyReportHTML='';
    

    Employes.forEach((Employe ,index)=>{

        let TotalHours=0;
        
        Object.values(Employe.Days).forEach((days)=>{
            TotalHours+=days
        })

    WeekleyReportHTML+=`
    <div class="Every-employ-details js-Every-employ-details-${Employe.Id}">
        <div class="employ-name">${Employe.Name}</div>
        <input type="number" class="days-hours js-days-hours" data-day='0'  data-employ-id='${Employe.Id}' value='${Employe.Days.mon}'>
        <input type="number"  class="days-hours js-days-hours" data-day='1' data-employ-id='${Employe.Id}' value='${Employe.Days.tue}'>
        <input type="number"  class="days-hours js-days-hours" data-day='2' data-employ-id='${Employe.Id}' value='${Employe.Days.wed}'>
        <input type="number" class="days-hours js-days-hours" data-day='3'  data-employ-id='${Employe.Id}' value='${Employe.Days.thu}'>
        <input type="number" class="days-hours js-days-hours" data-day='4'  data-employ-id='${Employe.Id}' value='${Employe.Days.fri}'>
        <input type="number" class="days-hours js-days-hours" data-day='5'  data-employ-id='${Employe.Id}' value='${Employe.Days.Sat}'>
        <input type="number" class="days-hours js-days-hours" data-day='6'  data-employ-id='${Employe.Id}' value='${Employe.Days.Sun}'>
        <div>${TotalHours}</div>  
        <button class="js-SAve-hours-Button save-button" data-employ-id='${Employe.Id}'>Save</button>
        <button class="edit-button js-edit-button-${Employe.Id}" data-employ-id='${Employe.Id}'>Edit</Button>
    </div>`
    })

    document.querySelector('.js-Weekley-report-main-div')
    .innerHTML=WeekleyReportHTML;
    
    let SaveInput =document.querySelectorAll('.js-SAve-hours-Button')
    let editButton =document.querySelectorAll('.edit-button')

     editButton.forEach((editButton)=>{
         editButton.addEventListener('click',()=>{
            let employId=editButton.dataset.employId

            
            let EmployDetailDiv=document.querySelector(`.js-edit-button-${employId}`)
             EmployDetailDiv.remove()

             let employDEtailsDiv =document.querySelector(`.js-Every-employ-details-${employId}`)
             employDEtailsDiv.classList.add('clicked-Edit')
         })
    })

    SaveInput.forEach((SaveInput)=>{
         SaveInput.addEventListener('click',()=>{
            
             let EmployId=SaveInput.dataset.employId
             
  
             updatingWeekleyHours(EmployId)

              rendringWeekleyOverview()
         })
    })
}

