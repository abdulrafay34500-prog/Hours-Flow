import { Employes , AddingEmploy,EmptyingInputs,updatingEmployInfo} from "../data/employes.js";
import { renderEmployDetails ,TotalNumberOfEmployes } from "./addingEmploy.js";
import { singleEmployDetail } from "./singleEmployDetails.js";

export function addingEmployPage(Heading ,matchingEmploye='') {
    let Html=`
    <div class="adding-employ-div">
        <h1>${Heading}</h1>
        <div class="input-id-div">
            <h3>Enter Id :</h3>
            <input class="id-input js-id-input" type="number" value=${matchingEmploye.Id || ''}>
        </div>
        <div class="input-name-div">
            <h3>Enter Name :</h3>
            <input class="name-input js-name-input" type="text" value=${matchingEmploye.Name || ''}>
        </div>
        <div class="input-hourleyInput-div">
            <h3>Enter Hourley wage</h3>
            <input class="hourleyInput-input js-hourleyInput-input" type="number" value=${matchingEmploye.HourleyWage|| ''}>
        </div>
        <div class="input-position-div">
            <h3>Enter Job Role</h3>
            <input class="jobRole-input js-jobRole-input" value=${matchingEmploye.JobRole || "Customer-Support-Representative"}>
        </div>
        <div class="input-Email-div">
            <h3>Enter Email</h3>
            <input class="Email-input js-Email-input" value=${matchingEmploye.Email ||'N/A'}>
        </div>
            <div class="input-Phonenumber-div">
            <h3>Enter Phone number</h3>
            <input class="Phonenumber-input js-Phonenumber-input"  value=${matchingEmploye.PhoneNo ||'N/A'}>
        </div>
        <div class="input-JoiningDate-div">
            <h3>Enter Joining Date</h3>
            <input class="JoiningDate-input js-JoiningDate-input" value=${matchingEmploye.JoiningDate || 'N/A'}>
        </div>
        <div class="input-shift-div">
            <h3>Select Shift Type :</h3>
            <select class="Select-shift js-Select-shift">
                <option ${matchingEmploye.ShiftType =='Morning'? 'Selected' : '' }>Morning</option>
                <option ${matchingEmploye.ShiftType =='Evening'? 'Selected' : '' }>Evening</option>
            </select>
        </div>
        <button class="Save-button js-save-update-button" data-employ-id=${matchingEmploye.Id || ''}>
            ${matchingEmploye?'Update':'Save'}
        </button>
        <div class="Cross-sign js-Cross-sign">
        ✖ 
        </div>                  
    </div>
    <div class="Error-notification">
        <p class="Error-Text">Error</p>
        <p class="Error-reason js-Error-reason"></p>
    </div>`

    document.querySelector('.js-AddingEmploye-main-page')
    .innerHTML=  Html; 
    
   
    let SaveOrUpdateButton = document.querySelector('.js-save-update-button')
    let crossButton =document.querySelector('.js-Cross-sign')

    crossButton.addEventListener('click',()=>{
        let main =document.querySelector('.main-addingEmploy-page')
        main.classList.remove('show')
        EmptyingInputs()
    })
    SaveOrUpdateButton.addEventListener('click' ,()=>{

        
        let employID=SaveOrUpdateButton.dataset.employId

        let employee = Employes.find((employ) => employ.Id == employID);
      
        
        if(!employee){
            console.log('Save')
            AddingEmploy();
            
        }else {
             console.log('update')
             updatingEmployInfo(employee)
             singleEmployDetail(employee.Id)
        }
        

        TotalNumberOfEmployes();
        renderEmployDetails()
        

        
    })
}
