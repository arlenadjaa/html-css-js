const body = document.querySelector('#projectContainer');
const title1 = document.querySelector('#title1');
const title2 = document.querySelector('#title2');
const title3 = document.querySelector('#title3');
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const messages = document.getElementById('messages');
const changeElement = document.querySelector('.alert');
const submitbtn = document.querySelector('#submit');
const closebtn = document.querySelector('.close-btn');
// const nameValue = name.value.trim();
// const emailValue = email.value.trim();
// const messagesValue = messages.value.trim();
// const colors = ['violet', 'red', 'green', 'pink', 'black', 'yellow', 'white'];


// Change BG colors of CARD

function selectColor(colorNum, colors){
    if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
    return "hsl(" + (colorNum * (360 / colors) % 360) + ",100%,50%)";
}

body.style.backgroundColor='white';

title1.addEventListener('click', function(){
    var color = selectColor(Math.floor(Math.random() * 999), 10);
    body.style.backgroundColor=color;

});

title2.addEventListener('click', function(){
    var color = selectColor(Math.floor(Math.random() * 999), 10);
    body.style.backgroundColor=color;

});

title3.addEventListener('click', function(){
    var color = selectColor(Math.floor(Math.random() * 999), 10);
    body.style.backgroundColor=color;

});



//form validation & custom alert
function popup(){
    submitbtn.addEventListener('click', () => {
            
        changeElement.classList.remove('hide');
        changeElement.classList.add('show');
        changeElement.classList.add('showAlert');
        form.reset();
    });
    

}
function closepopup(){
    closebtn.addEventListener('click', () => {
        changeElement.classList.remove('show');
        
        changeElement.classList.add('hide');
    });
}

function validateName(){
    var nameValue = name.value.trim();

    if(nameValue === '' || nameValue == null) {
        return false;
    } else {
        
        return true;
        
    }
}

function validateEmail(){
    var emailValue = email.value.trim();

    if(emailValue === '' || emailValue == null) {

        return false;
        
    }  else if (!isValidEmail(emailValue)) {
        return false;
        
    } else {
        return true;
        
    }
}

/* function validateMessage(){
    var messagesValue = messages.value.trim();

    if (messagesValue === '' || messagesValue == null){

        
        return false; 
         
    } else {
        return true;
    }
} */

function validateForm() {
    var messagesValue = messages.value.trim();
    if (!validateName()){
        setError(name, 'Name is required')
    } else {
        setSuccess(name);
    }

    if (!validateEmail()){
        setError(email, 'Provide valid email')
    } else {
        setSuccess(email);
    }

/*    if (!validateMessage()){
        setError(messages, 'Please enter a message')
    } else {
        setSuccess(messages);
    } */

    
    if ((validateName()  && validateEmail()) /* && (validateMessage()) */ ){
        
        changeElement.classList.remove('hide');
        changeElement.classList.add('show');
        changeElement.classList.add('showAlert');
        form.reset();
        setTimeout(function(){changeElement.classList.remove('show');
           
            changeElement.classList.add('hide');}, 3000)
    
        }

}



const setError = (element, message) => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

    
    
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};





//Nav Bar Active While Scrolling
const navLinksEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = '';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl =>{
        if(window.scrollY >= sectionEl.offsetTop - 500){
            currentSection = sectionEl.id;
        }
    });

    navLinksEls.forEach(navLinkEl => {
        if(navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active')?.classList.remove('active');
            navLinkEl.classList.add('active');
        }
    });
});






closepopup();