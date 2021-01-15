const callButton = document.querySelector('.header__button-text');
const requestPopup = document.querySelector('.overlay');
const closePopup = document.querySelector('.form-request__close');

function togglePopup(){
    requestPopup.classList.toggle('overlay_visible');
}

callButton.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
