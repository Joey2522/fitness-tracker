
let distanceText = document.getElementById('distanceText');
let durationText = document.getElementById('durationText');
let feelingText = document.getElementById('feelingText');

let runSubmitBtn = document.getElementById('runSubmitBtn');


const submitRun = async (event) => {
    console.log('Submit Run activated');
    
    event.preventDefault();
  
    let distance = distanceText.value.trim();
    let duration = durationText.value.trim();
    let feeling = feelingText.value.trim();

    console.log('distance', distance);
    console.log('duration', duration);
    console.log('feeling', feeling);

    const response = await fetch('/api/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const userData = await response.json();
        const userId = userData.id;
        console.log('userId', userId);

        apiUrl = '/api/stats';

        if (distance && duration && feeling) {
    
            const requestData = {
                distance,
                duration,
                feeling,
                runner_id: userId
            };
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(requestData),
                headers: { 'Content-Type': 'application/json' },
            });
        
            console.log(response);
        
            if (response.ok) {
                document.location.replace('/running');
            } else {
                console.log('Error');
                alert('Failed to add run');
            }
        }  
        } else {
            console.log('Error with the conditional run input statement');
    }


};

runSubmitBtn.onclick = (event) => {
    console.log('buttonclicked')
    submitRun(event);
};