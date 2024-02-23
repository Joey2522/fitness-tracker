//purpose: to fetch and display user data from the database
 


// document.addEventListener('DOMContentLoaded', () => { 
//     async function fetchUserData(userId) {
//         try {
//             const response = await fetch("./contollers/api/ " ); 
//             const userData = await response.json();
//             return userData;
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//             return [];
//         }
//     }
    
//     function renderRunCards(userData) {
//         const runListContainer = document.getElementById('runList');
//         runListContainer.innerHTML = '';

//         userData.forEach((run) => {
//             const card = document.createElement('div');
//             card.classList.add('run-card');
//             card.innerHTML = `<h3>${run.info}</h3>`;
//             card.addEventListener('click', () => showRunDetails(run));
//             runListContainer.appendChild(card);
//         });
//     }

//     function showRunDetails(run) {
//         const detailsContainer = document.getElementById('runDetails');
//         detailsContainer.innerHTML = `<h2>${run.info}</h2><p>${run.details}</p>`;
//     }

//     document.getElementById('createAcctBtn').addEventListener('click', () => {
//         window.location.href = "";// add handlebars file Path
//         console.log("Create account button clicked");
//     });

//     const storedUserId = localStorage.getItem('userId');

//     if (storedUserId) {
//         fetchUserData(storedUserId)
//             .then((userData) => renderRunCards(userData))
//             .catch((error) => console.error('Error during fetching user data:', error));
//     }

//     document.getElementById('loginForm').addEventListener('submit', async (event) => {
//         event.preventDefault();

//         try {
//             const userId = await getUserIdAfterLogin();

//             localStorage.setItem('userId', userId);

//             const userData = await fetchUserData(userId);

//             renderRunCards(userData);
//         } catch (error) {
//             console.error('Error during login or fetching user data:', error);
//         }
//     });
// });
