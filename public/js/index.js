let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let title = document.getElementById('title');

signinBtn.onclick = function() {
    firstName.style.maxHeight = "0";
    lastName.style.maxHeight = "0";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
};

signupBtn.onclick = function() {
    firstName.style.maxHeight = "65px";
    lastName.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
};