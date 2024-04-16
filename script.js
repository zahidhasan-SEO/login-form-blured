const signinbtn = document.querySelector('.signInBtn-link');
const signupbtn = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signupbtn.addEventListener('click', () =>{
    wrapper.classList.toggle('active');
});

signinbtn.addEventListener('click', () =>{
    wrapper.classList.toggle('active');
});