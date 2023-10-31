
const submit = document.querySelector('#continueBtn');


submit.addEventListener('click', function() {
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;
    let errorMessage = document.querySelectorAll('.errorMessage');

    if (userEmail == '' || userName == '') {
        console.log("inputs are missing")
        errorMessage.forEach((message) => {
            message.innerHTML = "Inputs are missing"
        })
    }


})

