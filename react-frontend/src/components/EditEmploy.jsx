import { useState , useRef } from 'react'
import '../CSS-Files/addingemploypage.css'

function EditEmploy({setEditEmployPage , SingleEmploy}) {
    let [employFrom ,setEmployForm]=useState({
        id: '',
        name: '',
        hourleyWage:'',
        jobRole: 'Customer-Support-representative',
        email:'N/A',
        PhoneNo:'N/A',
        joiningDate:'N/A',
        shiftType:'Morning',
    });

    let [error ,setError]=useState({
        exist:false,
        reason:''
    });

    let savingUsestate=(e)=>{
       let {name , value}=e.target
       setEmployForm({
        ...employFrom,
         [name]:value
        }
       )
    };


    let timeOut = useRef(null);
    let SavingEmploy=async(e)=>{
        e.preventDefault()
        clearTimeout(timeOut.current)
        let matchingEmploy=employes.find((emp)=>emp.id == employFrom.id)
        
        if(Object.values(employFrom).every(Boolean) && !matchingEmploy){
          try{
             let responce=await fetch('https://hours-flow-backend.vercel.app/api/employes',{
            method:'POST',
            headers:{
                    'Content-Type':'application/json'
                },
            credentials: 'include',
            body:JSON.stringify(employFrom)
           })
             let data=await responce.json();

          if(responce.ok && data){
            window.location.href='/employesPage'
          }
          }catch(err){
            console.log(err.message)
          }
        }else if(matchingEmploy){
            setError({
                exist:true,
                reason:'This employee ID is already taken'
            })
        }else{
             setError({
                exist:true,
                reason:'Please Enter all Details'
            })
        }

        timeOut.current=setTimeout(()=>{
            setError({
                exist:false,
                reason:''
            })
        },2000)
        
    };
   
    return(
    <form className="AddingEmploye-main-page js-AddingEmploye-main-page" onSubmit={SavingEmploy}>
        <div className="adding-employ-div">
            <h1>Edit employee</h1>
            <div className="input-id-div">
                <h3>Enter Id :</h3>
                <input className="id-input js-id-input" type="number" value={SingleEmploy.id} name='id'
                 onChange={savingUsestate}
                />
            </div>
            <div className="input-name-div">
                <h3>Enter Name :</h3>
                <input className="name-input js-name-input" type="text" value={SingleEmploy.name} name='name'
                onChange={savingUsestate}
                />
            </div>
            <div className="input-hourleyInput-div">
                <h3>Enter Hourley wage</h3>
                <input className="hourleyInput-input js-hourleyInput-input" type="number" 
                value={SingleEmploy.hourleyWage}
                name='hourleyWage'
                onChange={savingUsestate}
                />
            </div>
            <div className="input-position-div">
                <h3>Enter Job Role</h3>
                <input className="jobRole-input js-jobRole-input" value={SingleEmploy.jobRole} name='jobRole'
                onChange={savingUsestate}
                />
            </div>
            <div className="input-Email-div">
                <h3>Enter Email</h3>
                <input className="Email-input js-Email-input" value={SingleEmploy.email} name='email' 
                onChange={savingUsestate}
                />
            </div>
                <div className="input-Phonenumber-div">
                <h3>Enter Phone number</h3>
                <input className="Phonenumber-input js-Phonenumber-input"  value={SingleEmploy.PhoneNo} name='PhoneNo'
                onChange={savingUsestate}
                />
            </div>
            <div className="input-JoiningDate-div">
                <h3>Enter Joining Date</h3>
                <input className="JoiningDate-input js-JoiningDate-input" value={SingleEmploy.joiningDate} name='joiningDate' 
                onChange={savingUsestate}
                />
            </div>
            <div className="input-shift-div">
                <h3>Select Shift Type :</h3>
                <select className="Select-shift js-Select-shift" name='shiftType' onChange={savingUsestate}
                value={SingleEmploy.shiftType}
                >
                    <option>Morning</option>
                    <option>Evening</option>
                </select>
            </div>
            <button className="Save-button js-save-update-button">
                Save
            </button>
            <div  className="Cross-sign" onClick={()=>setEditEmployPage(false)}>              
                ✖         
            </div>                  
        </div>
        {error.exist &&
           <div className="Error-notification">
            <p className="Error-Text">Error</p>
            <p className="Error-reason js-Error-reason">{error.reason}</p>
          </div>  
        }
              
    </form>
    )
}

export default EditEmploy