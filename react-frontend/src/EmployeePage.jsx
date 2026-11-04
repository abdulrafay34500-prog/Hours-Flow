import './CSS-Files/employes.css'
function EmployeePage() {
    return(
        <main class="main-addingEmploy-page">

            <div class="combining-AddingAndSingle-Employ-div  js-combining-AddingAndSingle-Employ-div">
                <div class="Adding-Employe-main-div">
                    <div class="Employe-main-header">
                        <div class="header-text-div">
                            <p class="employes-text">Employees</p>
                            <p class="manage-team-text">Manage your team members and their details</p>

                        </div>
                        <button class="add-button js-add-employ-button">
                            + Add Employe 
                        </button>
                    </div>
                    <div class="employ-hours-payroll-div">
                        <div class="Total-employ-div">
                            <img class="employ-icon" src="icons/employ.png"/>
                            <p class="total-employ-text">Total Employes</p>
                            <p class="Employe-numbers js-Employe-numbers">0</p>
                        </div>
                        <div class="Total-Hours-div">
                            <img class="clock-icon" src="icons/clock.png"/>
                            <p class="total-Hours-text">Total Hours (This Month)</p>
                            <p class="Total-hours-numbers js-Total-hours-numbers">0</p>
                        </div>
                        <div class="Total-Payroll-div">
                            <img class="currency-icon" src="icons/rupee.png"/>
                            <p class="total-Payroll-text">Total Payroll (This Month)</p>
                            <p class="monthly-Payroll-Amount js-monthly-Payroll-Amount">0</p>
                        </div>
                    </div>
                    <div class="Employe-Details-main-div">
                        <div class="Employer-Details-mainHeader">
                            <p class="Employ-id">ID</p>
                            <p class="Employ-namee">Employ Name</p>
                            <p class="Employ-ShiftTypee">Shift Type</p>
                        </div>
                        <div class="added-Employes-details js-added-Employes-details">
                        
                            
                        </div>

                    </div>
                </div>
               
                <div class="Single-employ-detail js-Single-employ-detail">



                </div>

            </div>

            <div class="AddingEmploye-main-page js-AddingEmploye-main-page">
                    
            </div>
           
            <div class="delete-popup js-delete-popup">

            </div>
           
            <div  class="js-history-page-popup">
                
            </div>

        </main>
    )
}

export default EmployeePage;