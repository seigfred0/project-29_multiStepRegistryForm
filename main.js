
const submit = document.querySelectorAll('.continueBtn');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');

userName.addEventListener('keydown', enterKey);
userEmail.addEventListener('keydown', enterKey);

// Submitting Options
function enterKey(event) {
    if (event.key === "Enter") {
        errorMessage(userName.value, userEmail.value);
       
    }
}

submit.forEach((button) => {
    button.addEventListener('click', () => {
        const userName = document.querySelector('#userName').value;
        const userEmail = document.querySelector('#userEmail').value;
        const cardPage = document.querySelectorAll('.card-main');
        const currentPage = cardPage[0]; // take the data input id

        cardPage.forEach((card) => {
            // console.log(card.getAttribute('data-input-id'));
            if (card.getAttribute('data-input-id') === "pageOne")  {
                console.log('Its page one')
                errorMessage(userName, userEmail);
                proceed(currentPage)
            }


        })



    })
    
})

function proceed(checkPage) {
    
}



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
    } else {
        proceed = true;
    }
}



