const continueBtn = document.querySelectorAll('.continueBtn');

let pageCount = 2;
let userInterests = [];
let userInfo = [];


function stepOne() {
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;
    const firstPage = document.querySelector('.step-one');

    errorMessage(userName, userEmail, firstPage)
    
}

function errorMessage(userName, userEmail, firstPage) {
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
        userInfo.push(userName);
        userInfo.push(userEmail);
        firstPage.style.display = 'none';
        pageCount += 1;
    }
}

function stepTwo() {
    const interests = document.querySelectorAll('.interest');
    interests.forEach((options) => {
        options.addEventListener('click', () => {
            const selected = options.getAttribute('data-value');

            options.classList.toggle('selected');
            if (options.classList.contains('selected')) {
                userInterests.push(selected)
            } else {
                userInterests = userInterests.filter(chosen => chosen !== selected)
                
            } // still a bit confused to the logic on this one...
            
            console.log(userInterests)
            
        })
    });

    
}

continueBtn.forEach((nextPage) => {
    nextPage.addEventListener('click', () => {
        if (pageCount === 1) {
            stepOne();
            console.log(userInfo)
        } else if (pageCount === 2) {
            stepTwo();
            console.log(pageCount)


        } else if (pageCount === 3) {
            stepThree();
        }
    });
});
