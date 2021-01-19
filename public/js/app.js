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
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = JSON.stringify(data.error);
-            } else {
                messageOne.textContent = JSON.stringify(data.location);
                messageTwo.textContent = JSON.stringify(data.forecast);
            }
        })
    })
})