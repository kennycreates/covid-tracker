const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}
//show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//vakidate email
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); //test method will verify if it matches email format
}

// Event listers
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value === ''){
        showError(username, 'username is required');
    }else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'email is required');
    }else if(!isValidEmail(email.value)){
        showSuccess(email);
    }
    if(password.value === ''){
        showError(password, 'password is required');
    }else{
        showSuccess(password);
    }
    if(password2.value === ''){
        showError(password2, 'verify your password');
    }else{
        showSuccess(password2);
    }
}); 

