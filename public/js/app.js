const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');


weatherForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch('/weather?address=' + location).then( (response) => {
        response.json().then((error, {location, forecast}) => {
            if(error) {
                messageOne.textContent = JSON.stringify(error);
            } else {
                messageOne.textContent = JSON.stringify(location);
                messageTwo.textContent = JSON.stringify(forecast);
            }
        })
    })
})