const myAPIEndpoint = 'https://harcourt-api.herokuapp.com/photos';
const addNewPhoto = () => {
    // 1. get user-generated data:
    const url = document.querySelector('#url').value;
    const cap = document.querySelector('#caption').value;
    // const password = document.querySelector('#password').value;
    // const email = document.querySelector('#email').value;
    // const avatar = document.querySelector('#avatar').value;

    // 2. post it to the endpoint:
    fetch(myAPIEndpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "url": url,
            "caption": cap
            // "email": email,
            // "password": password,
            // "avatar": avatar
        })
    })
    .then(response => response.json())
    .then(data => {
        // 3. print the results to the screen
        console.log(data);
    });
};

// 4. attach function to button:
document.querySelector('button').onclick = addNewPhoto;
