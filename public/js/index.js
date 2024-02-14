//even listeners for login button
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginBtn').addEventListener('click', function(){
        window.location.href = "../views/login.handlebars";
        console.log("Login button clicked");
    });
});

//even listeners for create account button
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('createAcctBtn').addEventListener('click', function(){
        window.location.href = "../views/create-acct.handlebars";
        console.log("Create account button clicked");

    });
});