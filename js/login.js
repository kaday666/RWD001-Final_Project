

const email =document.querySelector('.email');
const password = document.querySelector('.password')
const form =document.getElementById('form');
const errorsh=document.getElementById("errorShow");
let  success= false;
let predefinedData = {
    email: 'loki@gmail.com',
    password: '12345678',
}

form.addEventListener('submit',()=>{
      
        if(predefinedData.email == email.value() || predefinedData.password == password.value()){
                success =true;
        }
       
        if(success){
            alert("yay");
        }
        else{
            errorsh.innerText = "Email and password doesnot match";
        }
   
})