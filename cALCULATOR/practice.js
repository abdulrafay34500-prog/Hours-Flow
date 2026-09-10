let calculation='';

document.querySelectorAll('.js-Buttons')
.forEach((Buttons)=>{
    Buttons.addEventListener('click' ,(()=>{
        
          let value=Buttons.dataset.value
 
          

          if(value == '='){
            let ans = eval(calculation)
             document.querySelector('.Calculation-screen').innerHTML = ans;
              
          }else{
              calculation+=value
             document.querySelector('.Calculation-screen').innerHTML=calculation
          }


          
    }))
})