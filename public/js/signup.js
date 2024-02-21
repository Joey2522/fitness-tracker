const signupFormHandler = async (event) => {
    console.log('Signup fucntion activated');
    event.preventDefault();
  
    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    // if there is an email and password, it will go through the following process to check.
    if (firstName && lastName && email && password) {

      // an API call being saved inside a variable. This will run a post request to /api/users/signup

      // a fetch request is basically what you do in insomnia or postman
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // if the api came back as true, it will take you to the / route
      if (response.ok) {
        document.location.replace('/index2.html');
      } else {
        console.log('Error');
        alert('Failed to sign in');
      }
    }
  };
  


  // When the form is submitted, the function above will run.
  document
    .querySelector('form')
    .addEventListener('submit', signupFormHandler);
  