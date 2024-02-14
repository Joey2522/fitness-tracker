let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

signinBtn.onclick = function() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

};

signupBtn.onclick = function() {
    nameField.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");

};

//even listeners for login button
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('loginBtn').addEventListener('click', function(){
//         window.location.href = "../views/login.handlebars";
//         console.log("Login button clicked");
//     });
// });

//even listeners for create account button
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('createAcctBtn').addEventListener('click', function(){
//         window.location.href = "../views/create-acct.handlebars";
//         console.log("Create account button clicked");

//     });
// });