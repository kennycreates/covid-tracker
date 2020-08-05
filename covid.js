const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//vakidate email
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, 'Email is not valid');
      }
    }
    //test method will verify if it matches email format


//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        console.log(input.id);
        if(input.value.trim() === ''){
            showError(input, 'is required');
        }else {
            showSuccess(input);
        }
    });
}

// Event listers
form.addEventListener('submit', function(e){
    e.preventDefault();
checkRequired([username, email, password, password2]);
    
}); 

