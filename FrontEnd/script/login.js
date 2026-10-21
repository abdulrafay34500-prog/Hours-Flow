
let formHTML=`<div class="input-group">
                    <label for="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        autocomplete="email"
                        required
                    >
                </div>

                <div class="input-group">
                    <div class="password-label">
                        <label for="password">Password</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        autocomplete="current-password"
                        required
                    >
                </div>

                <button type="buttton" class="login-btn js-login-btn">
                    Log In
                </button>`




document.querySelector('.js-login-form').innerHTML=formHTML

const loginBTN=document.querySelector('.js-login-btn')


loginBTN.addEventListener('click' ,async (event)=>{
     event.preventDefault()

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    let sighnupDetails={
    email:email,
    password:password,
    }

   

    sighingUP()
    async function sighingUP() {

        if ( !email || !password) {
            alert('Please fill in all details');
            return;
        }

        try{
            let responce = await fetch('https://molasses-distorted-tiger.abasthan.app/api/user/login' , {
                method:'POST',
                headers:{
                'Content-Type':'application/json'
                },
                credentials: 'include',
                body:JSON.stringify(sighnupDetails)
            })

            let data=await responce.json()

            if(responce.ok && data.success){
                window.location.href='./employes.html'
            }else {
                alert(data.message);
            }
        }catch(err){
             console.log(err.message)
             alert('Server not running or working properley')
        }
   
    }
        
})




