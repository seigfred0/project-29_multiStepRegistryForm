
const submit = document.querySelector('#continueBtn');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');

userName.addEventListener('keydown', enterKey);
userEmail.addEventListener('keydown', enterKey);

function enterKey(event) {
    if (event.key === "Enter") {
        errorMessage(userName.value, userEmail.value)
    }
}


submit.addEventListener('click', function() {
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;

   errorMessage(userName, userEmail)
    // function that handles error message




    
    // function that validates the email
    // function that approves and sends to the next page
})

function errorMessage(userName, userEmail) {
    let errorMessage = document.querySelectorAll('.errorMessage');
    errorMessage.forEach((message) => {
        message.innerHTML = '';
    });

    if (userName === '') {
        errorMessage.forEach((message) => {
            if (message.getAttribute('data-input-id') === 'userName') {
                message.innerHTML = "What's Your Name?";
            }
        });
    }

    if (userEmail === '') {
        errorMessage.forEach((message) => {
            if (message.getAttribute('data-input-id') === 'userEmail') {
                message.innerHTML = "Your Email Is Missing"
            }
        })
    } else if (!userEmail.match(/^\S+@\S+\.\S+$/)) {
        errorMessage.forEach((message) => {
            if (message.getAttribute('data-input-id') === 'userEmail') {
                message.innerHTML = "Invalid Email Address"
            }
        })
    }
}

/*
else if (!userEmail.match(/^\S+@\S+\.\S+$/)) { 
        errorMessage.forEach((message) => {
            if (message.getAttribute('data-input-id') === 'userEmail') {
                message.innerHTML = "Invalid Email Address";
            }
        });

    }



*/