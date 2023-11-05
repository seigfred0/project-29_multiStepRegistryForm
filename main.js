const continueBtn = document.querySelectorAll('.continueBtn');
const interests = document.querySelectorAll('.interest');

let pageCount = 1;
let userInterests = []
let userInfo = [];
let pageTwo;
let pageThree;


function stepOne() {
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;
    const firstPage = document.querySelector('.step-one');
    const secondPage = document.querySelector('.step-two');

    errorMessage(userName, userEmail, firstPage, secondPage)
    
}

function errorMessage(userName, userEmail, firstPage, secondPage) {
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
        secondPage.style.display = 'block'
        pageCount += 1;
    }
}

function stepTwo() {
    const secondPage = document.querySelector('.step-two');
    const thirdPage = document.querySelector('.step-three');
   if (userInterests.length > 0) {
    pageCount += 1;
    secondPage.style.display = 'none';
    thirdPage.style.display = 'block';
    
    stepThree();

   } 

}

// pageIndicator(true, true);

function pageIndicator(pageTwo, pageThree) {
    const currentPage = document.querySelectorAll('.card-pages_dots .circle');
    
    

    if (pageTwo) {
        currentPage[1].classList.add('current');
        console.log(currentPage);
    }
    if (pageThree) {
        currentPage[2].classList.add('current');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const interests = document.querySelectorAll('.interest');
    interests.forEach((options) => {
        options.addEventListener('click', () => {
            const selected = options.getAttribute('data-value');

            options.classList.toggle('selected');
            if (options.classList.contains('selected')) {
                userInterests.push(selected)
            } else {
                userInterests = userInterests.filter(chosen => chosen !== selected)
                
            }
            
        })
    });

    
})


function stepThree() {
    const displayName = document.querySelector('.userNameView');
    const displayEmail = document.querySelector('.userEmailView');
    const interestView = document.querySelector('.interest-view-container');
    // console.log(displayUserInterest)
    // console.log(userInterests)
    displayName.innerHTML = userInfo[0];
    displayEmail.innerHTML = userInfo[1];
    
    interestView.innerHTML = ''
    
    userInterests.forEach((interest) => {
        const userInterestElement = `
        <p class="userInterestView custom-class">• ${interest}</p>`;
        interestView.insertAdjacentHTML('beforeend', userInterestElement);
    })
   


}

continueBtn.forEach((nextPage) => {
    nextPage.addEventListener('click', () => {
        if (pageCount === 1) {
            stepOne();
            pageIndicator(true, false)
            console.log(userInfo)
        } else if (pageCount === 2) {
            stepTwo();
            pageIndicator(true, true)
            
        } else if (pageCount === 3) {
            console.log("step three is working")
        }
    });
});
