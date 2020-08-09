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
//validate email
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {   //test method will verify if it matches email format
        showSuccess(input);
      } else {
        showError(input, 'Email is not valid');
      }
    }  
//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        console.log(input.id);
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else {
            showSuccess(input);
        }
    });
}

//password length
function checkLength(input, min, max) {
    if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        }else if (input.value.length > max){
            showError(input `${getField(input)} must be less than ${max} characters`);
        }else {
           showSuccess(input);
        }
}
//password complexity
function checkComplexity(input){
    var input1 = /^[A-Za-z]\w{7, 14}$/;
    if(input.value.match(input1)){

    }
}

//check password match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }
   
}
//get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listers
form.addEventListener('submit', function(e){
    e.preventDefault();
checkRequired([username, email, password, password2]);
    checkLength(username, 7, 15);
    checkLength(password, 8, 20);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
}); 
