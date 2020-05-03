document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('pin').addEventListener('blur',validatePin);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone)
function validateName(){
    const name=document.getElementById('name');
    //FirstName MidName LastName
    const re=/^ *[A-Za-z0-9]{2,30} *[A-Za-z0-9]{0,30} *[A-Za-z0-9]{0,30}$/i;
    if(!re.test(name.value)){
       name.classList.add('is-invalid');
    }
    else{
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
    }
}
function validatePin(){
const pin=document.getElementById('pin')
const re=/^(\d{2}[^0-9]?\d{2}[^0-9]?\d{2})$/
console.log(pin.value)
if(!re.test(pin.value)){
    pin.classList.add('is-invalid');
}
else{
    pin.classList.remove('is-invalid')
    pin.classList.add('is-valid');
}
}
function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
  }

}
function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^[0-9]{10}$/;
  
    if(!re.test(phone.value)){
      phone.classList.add('is-invalid');
    } else {
      phone.classList.remove('is-invalid');
      phone.classList.add('is-valid');
    }
  }