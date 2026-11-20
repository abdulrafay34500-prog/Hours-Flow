import {  useState } from 'react'
import './CSS-Files/loginpage.css'
import componyLogo from './logo&Img/logo.png.png'
import {Link , useNavigate} from 'react-router-dom'
function Login() {
    let [loading ,setLoading]=useState(false)
    const navigate = useNavigate()

    let [email ,setEmail]=useState('')
    let [password ,setPassword]=useState('')

    
    let LoginFun=async(e)=>{
        setLoading(true)
        e.preventDefault()
        let loginDeatils={
            email,
            password
        }
       if (!email || !password){
        alert('Please Enter all Details to Continue')
        return
       }
       try{
          let responce =await fetch('https://hours-flow-backend.vercel.app/api/user/login' ,{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            credentials: 'include',
            body:JSON.stringify(loginDeatils)
          })

          let data=await responce.json()
           if(responce.ok && data.success){
                navigate('/employesPage',{
                    state:{email}
                })
            }else {
                alert(data.message);
            }
       }catch(err){
             console.log(err.message)
             alert('Server not running or working properley')
       }finally{
        setLoading(false)
       }
    }
    return (

        <div className='bodyy'>
            {loading &&
             <div className="loading-overlay">
                <div className="loading-box">
                    <div className="loader"></div>
                    <p>Loading...</p>
                </div>
            </div>}
        <div className="login-container">
        <div className="login-card">

            <div className="logo"><img className="logo-img" src={componyLogo} /></div>

            <h1>Welcome Back!</h1>
            <p className="subtitle">
                Please enter your details to log in.
            </p>

            <form action="#" method="post" className="js-login-form" onSubmit={LoginFun}>
               <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="input-group">
                    <div className="password-label">
                        <label htmlFor="password">Password</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <input onChange={(e)=>{setPassword(e.target.value)}}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                    />
                </div>

                <button type="submit" className="login-btn js-login-btn" >
                    Log In
                </button>

            </form>

            <p className="signup-text">
                Don't have an account?
                <Link to="/Sighnuppage">Sign up</Link>
            </p>

            <p className="terms">
                By continuing, you agree to our
                <a href="#">Terms</a> and
                <a href="#">Privacy Policy</a>.
            </p>

        </div>
       </div>
       </div>
    )
}
export default Login