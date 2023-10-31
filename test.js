function updateErrorMessages(userName, userEmail) {
    const errorMessage = document.querySelectorAll('.errorMessage');
    
    // Clear all error messages initially
    errorMessage.forEach((message) => {
        message.innerHTML = "";
    });

    if (userName === '') {
        errorMessage.forEach((message) => {
            if (message.getAttribute('data-input-id') === 'userName') {
                message.innerHTML = "Name is required";
            }
        });
    }

    if (userEmail === '') {
        errorMessage.forEach((message) => {
            if (message.getAttribute('data-input-id') === 'userEmail') {
                message.innerHTML = "Email is required";
            }
        });
    }
}

const submit = document.querySelector('#continueBtn');

submit.addEventListener('click', function() {
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;

    updateErrorMessages(userName, userEmail);

    // You can add further validation or form submission logic here
});


