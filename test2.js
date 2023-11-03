const submit = document.querySelectorAll('.your-submit-class'); // Make sure to select the correct submit button(s)

let cardCount = 1;
const selectedInterests = [];

function handleStepOne() {
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;

    errorMessage(userName, userEmail);
    const nextStep = errorMessage(userName, userEmail);

    if (nextStep) {
        cardCount = 2;
    }
}

function handleStepTwo() {
    console.log("It's page two");

    const interestChoices = document.querySelectorAll('.interest');

    interestChoices.forEach((choice) => {
        choice.addEventListener('click', () => toggleChoices(choice));
    });

    function toggleChoices(choice) {
        const selected = choice.getAttribute('data-value');
        console.log(selected);
        choice.classList.toggle('selected');

        if (choice.classList.contains('selected')) {
            selectedInterests.push(selected);
            console.log(selectedInterests);
        }
    }
}

function handleStepThree() {
    console.log("Yey, it's the last page");
}

submit.forEach((button) => {
    button.addEventListener('click', () => {
        if (cardCount === 1) {
            handleStepOne();
        } else if (cardCount === 2) {
            handleStepTwo();
        } else if (cardCount === 3) {
            handleStepThree();
        }
    });
});
