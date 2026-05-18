const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const phonenumber = document.getElementById('phonenumber')
const email = document.getElementById('email')
const nic = document.getElementById('nic')
const pwd = document.getElementById('pwd')
const cpwd = document.getElementById('cpwd')

form.addEventListener('submit',(e)=>{
   if(!validateInputs()){
    e.preventDefault();
   }
})

function validateInputs(){
    const fnameVal = fname.value.trim ()
    const lnameVal = lname.value.trim ()
    const phonenumberVal = phonenumber.value.trim ()
    const emailVal = email.value.trim ()
    const nicVal = nic.value.trim ()
    const pwdVal = pwd.value.trim ()
    const cpwdVal  = cpwd .value.trim ()
    let success=true

    if(fnameVal===''){
        success=false;
        setError(fname,"firstname is required")
    }
    else{
        setSuccess(fname)
    }
    if(lnameVal===''){
        success=false;
        setError(lname,"lastname is required")
    }
    else{
        setSuccess(lname)
    }
    if (pwdVal === ''){
        success=false;
        setError(pwd,'password is required')
    }
    else if(pwdVal.length<8){
        success=false;
        setError(pwd,'password must be atleast 8 charectors')
    }
    
    else{
        setSuccess(pwd)
    }
    
    if(cpwdVal === ''){
        success=false;
        setError(cpwd,'retype password is required')
    }
    else if(cpwdVal!==pwdVal){
        success=false;
        setError(cpwd,'password doesnot match')
    }
    else{
        setSuccess(cpwd)
    }
    if (phonenumberVal === '') {
        success = false;
        setError(phonenumber, 'phone number is required')
    }
    else if (!/^\d{10}$/.test(phonenumberVal)) {
        success = false;
        setError(phonenumber, 'phone number must be 10 digits')
    }
    else {
        setSuccess(phonenumber)
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'email is required')
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        success = false;
        setError(email, 'enter valid email')
    }
    else {
        setSuccess(email)
    }


    if (nicVal === '') {
        success = false;
        setError(nic, 'NIC number is required')
    }
    else if (!/^(\d{9}[vVxX]|\d{12})$/.test(nicVal)) {
        success = false;
        setError(nic, 'enter valid NIC number')
    }
    else {
        setSuccess(nic)
    }

    return success;


}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success')
    
}
function setSuccess(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error')
    
}