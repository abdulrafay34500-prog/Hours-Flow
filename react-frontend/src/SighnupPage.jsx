import componyLogo from './logo&Img/logo.png.png'
import './CSS-Files/sighnupPage.css'
import { useState } from 'react'
function SighnupPage() {
    let [sighnupForm ,setSighnupForm] =useState({
        email:'',
        name:'',
        password:''
    })
    let savingFromInfo=(e)=>{
      let {value , name}=e.target;
      setSighnupForm({
        ...sighnupForm,
        [name]:value
      })
    }

   console.log(sighnupForm)

    let submitingForm=async(e)=>{
       e.preventDefault()
       try{
          let responce=await fetch('https://hours-flow-backend.vercel.app/api/user/signup' , {
                method:'POST',
                headers:{
                'Content-Type':'application/json'
                },
                credentials: 'include',
                body:JSON.stringify(sighnupForm)
            })

            let data =await responce.json()

            if(responce.ok && data.success){
                 window.location.href='/'
            }else{
                alert(data.message)
            }
       }catch(err){
         console.log(err.message)
       }

    }

    return(
        <div className="signup-container">
        <div className="signup-card">

            <div className="logo"><img className="logo-img" src={componyLogo}/></div>

            <h1>Create Account On HourFlow</h1>
            <p className="subtitle">
                Join us today! Enter your details below.
            </p>

            <form action="#" method="post" className="js-sighnup-form" onSubmit={submitingForm}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={savingFromInfo}
                        type="text"
                        id="username"
                        name="name"
                        placeholder="Enter your username"
                        autoComplete="username"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input onChange={savingFromInfo}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={savingFromInfo}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Create a password"
                        autoComplete="new-password"
                        minLength="4"
                        required
                    />
                    <small>Use at least 8 characters.</small>
                </div>

                <button  type="submit" className="signup-btn js-signup-btn">
                    Create Account
                </button>


            </form>

            <p className="login-text">
                Already have an account?
                <a href="/">Log in</a>
            </p>

            <p className="terms">
                By signing up, you agree to our
                <a href="#">Terms</a> and
                <a href="#">Privacy Policy</a>.
            </p>

        </div>
    </div>
    )
}

export default SighnupPage