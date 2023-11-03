let selectedInterests = [];

const submit = document.querySelectorAll('.continueBtn');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
let nextStep = false;

const pageOne = document.querySelector('.step-one');
const pageTwo = document.querySelector('.step-two');

// userName.addEventListener('keydown', enterKey);
// userEmail.addEventListener('keydown', enterKey);

// Submitting Options
function enterKey(event) {
    if (event.key === "Enter") {
        errorMessage(userName.value, userEmail.value);
       
    }
}

submit.forEach((button) => {
    button.addEventListener('click', () => {
        const cardPage = document.querySelectorAll('.card-main');
        let cardCount = 1;
        
     

        cardPage.forEach(() => {   
            if (cardCount === 1)  {
                const userName = document.querySelector('#userName').value;
                const userEmail = document.querySelector('#userEmail').value;
               
                errorMessage(userName, userEmail);
                nextStep = errorMessage(userName, userEmail);
                if (nextStep) {
                    pageOne.style.display = "none";
                    cardCount += 1;;
                }

            } else if (cardCount === 2) {
                console.log("its page two");

                const interestChoices = document.querySelectorAll('.interest');
                interestChoices.forEach((choice) => {
                    choice.addEventListener('click', () => toggleChoices(choice))
                   
                })

                function toggleChoices(choice) {
                    const selected = choice.getAttribute('data-value');
                    console.log(selected)
                    choice.classList.toggle('selected');

                    if (choice.classList.contains('selected')) {
                        selectedInterests.push(selected);
                    } else {
                        selectedInterests = selectedInterests.filter(interest => interest !== selected)
                    }
           
                } 
            } else if (cardCount === 3) {
                console.log("Yey I'ts The Last Page")
                pageTwo.style.display = 'none';


            }
            
            
        })
    })
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
    } else {
        nextStep = true;
    }

    return nextStep 
}



