
let formHTML=`<div class="input-group">
                    <label for="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        autocomplete="username"
                        required
                    >
                </div>

                <div class="input-group">
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
                    <label for="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Create a password"
                        autocomplete="new-password"
                        minlength="8"
                        required
                    >
                    <small>Use at least 8 characters.</small>
                </div>

                <button  type="button" class="signup-btn js-signup-btn">
                    Create Account
                </button>`




document.querySelector('.js-sighnup-form').innerHTML=formHTML

const sighnupBTN=document.querySelector('.js-signup-btn')


sighnupBTN.addEventListener('click' ,async (event)=>{
    event.preventDefault()

    const name = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    let sighnupDetails={
    name:name,
    email:email,
    password:password,
    }

   

    sighingUP()
    async function sighingUP() {

        if (!name || !email || !password) {
            alert('Please fill in all details');
            return;
        }

        try{
            let responce = await fetch('https://molasses-distorted-tiger.abasthan.app/api/user/signup' , {
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




