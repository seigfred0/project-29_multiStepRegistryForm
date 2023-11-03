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




























// Initialize an array to store user input
const formData = [];

// Select form elements and buttons
const formSections = document.querySelectorAll('.form-section');
const nextButton = document.querySelector('#nextButton');
const prevButton = document.querySelector('#prevButton');
const submitButton = document.querySelector('#submitButton');

// Start with the first form section
let currentSection = 0;

// Function to move to the next section
function nextSection() {
  if (currentSection < formSections.length - 1) {
    formSections[currentSection].style.display = 'none';
    currentSection++;
    formSections[currentSection].style.display = 'block';
  }
}

// Function to move to the previous section
function prevSection() {
  if (currentSection > 0) {
    formSections[currentSection].style.display = 'none';
    currentSection--;
    formSections[currentSection].style.display = 'block';
  }
}

// Function to handle form submission
function submitForm() {
  // Capture and store user input
  const inputField = formSections[currentSection].querySelector('input');
  formData[currentSection] = inputField.value;
  
  if (currentSection < formSections.length - 1) {
    nextSection();
  } else {
    // Display a summary of user input on the final page
    const summary = document.getElementById('summary');
    summary.innerHTML = '<h2>Summary</h2>';
    formData.forEach((value, index) => {
      summary.innerHTML += `<p>Stage ${index + 1}: ${value}</p>`;
    });
  }
}

// Event listeners for buttons
nextButton.addEventListener('click', nextSection);
prevButton.addEventListener('click', prevSection);
submitButton.addEventListener('click', submitForm);


/////////////////////////////



const submit = document.querySelectorAll('.continueBtn');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');

userName.addEventListener('keydown', enterKey);
userEmail.addEventListener('keydown', enterKey);

let proceed = false;


// Submitting Options
function enterKey(event) {
    if (event.key === "Enter") {
        errorMessage(userName.value, userEmail.value);
        stepTwo();
    }
}

submit.addEventListener('click', function() {
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;

    // const userData = []

   errorMessage(userName, userEmail);
   stepTwo();
   stepThree();
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
        proceed = true;
    }
}

function stepTwo() {
    const firstStep = document.querySelector('.step-one');
    const secondStep = document.querySelector('.step-two');

    if (proceed === true) {
        console.log("it's time for the next process");
        firstStep.style.display = 'none'
    }
}

function stepThree(stepTwo) {

}




   // cardPage.forEach((card) => {
        //     if (card.getAttribute('data-input-id') === "pageOne")  {
        //         const userName = document.querySelector('#userName').value;
        //         const userEmail = document.querySelector('#userEmail').value;
               
        //         errorMessage(userName, userEmail);
        //         nextStep = errorMessage(userName, userEmail);
        //         console.log(nextStep)
        //         if (nextStep) {
        //             pageOne.style.display = "none"
        //         }

        //         console.log('its page One')
        //         // proceed(currentPage)
        //     } else if (card.getAttribute('data-input-id') === "pageTwo") {
        //         console.log("its page two")
        //     }
        // })



        const interestSpans = document.querySelectorAll(".interest");

                interestSpans.forEach((choice) => {
                    choice.addEventListener('click', () => toggleInterest(choice))
                    getSelectedInterests()
                })


                function toggleInterest(choice) {
                    const value = choice.getAttribute("data-value");
                    
                    if (selectedInterests.includes(value)) {
                        const index = selectedInterests.indexOf(value);
                        if (index !== -1) {
                            selectedInterests.splice(index, 1);
                        }
                        choice.classList.remove("selected")
                    } else {
                        choice.style.backgroundColor = 'red'
                        selectedInterests.push(value);
                        choice.classList.add("selected")
                    }
                }

                function getSelectedInterests() {
                    console.log("Selected interests:", selectedInterests);
                    // You can perform additional actions with the selected interests here.
                }