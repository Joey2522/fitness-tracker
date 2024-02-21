console.log('Hello')

let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let firstNameBox = document.getElementById('firstNameBox');
let firstNameText = document.getElementById('firstNameText');
let lastNameBox = document.getElementById('lastNameBox');
let lastNameText = document.getElementById('lastNameText');
let emailText = document.getElementById('emailText');
let passwordText = document.getElementById('passwordText');

let title = document.getElementById('title');
let submitBtn = document.getElementById('submitBtn');

let submitLogic = true;

signinBtn.onclick = function() {
    firstNameBox.style.maxHeight = "0";
    lastNameBox.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    submitLogic = false;
    console.log(submitLogic);
};

signupBtn.onclick = function() {
    firstNameBox.style.maxHeight = "30px";
    lastNameBox.style.maxHeight = "30px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    submitLogic = true;
    console.log(submitLogic);
};

let firstName = '';
let lastName = '';
let email = '';
let password = '';


const submitForm = async (event) => {
    console.log('Submit function activated');
    
    event.preventDefault();
  
    let firstNameCheck = firstNameText.value.trim() || null;
    let lastNameCheck = lastNameText.value.trim() || null;
    let email = emailText.value.trim();
    let password = passwordText.value.trim();

    let first_name = firstNameCheck === '' ? null : firstNameCheck;
    let last_name = lastNameCheck === '' ? null : lastNameCheck;


    console.log('first name', firstName);
    console.log('last name', lastName);
    console.log('email', email);
    console.log('password', password);


    let apiUrl = '';

  
    if (submitLogic) {

        apiUrl = '/api/users/signup';

        if (first_name && last_name && email && password) {

            const response = await fetch(apiUrl, {
              method: 'POST',
              body: JSON.stringify({ first_name, last_name, email, password }),
              headers: { 'Content-Type': 'application/json' },
            });
      
            console.log(response);
      
            if (response.ok) {
              document.location.replace('/running');
            } else {
              console.log('Error');
              alert('Failed to sign in');
            }
          } else {
              console.log('Error with the conditional signup statement');
          }
    } else {
        apiUrl = '/api/users/signin';

        if (first_name === null && last_name === null && email && password) {    
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            console.log(response);
    
            if (response.ok) {
                document.location.replace('/running');
            } else {
                console.log('Error');
                alert('Failed to sign in');
            }
        } else {
            console.log('Error with the conditional signin statement');
        }
    };



};

submitBtn.onclick = (event) => {
    submitForm(event);
};