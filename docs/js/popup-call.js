import { openPopupSend } from "./popup-send.js"; 

const popupCall = document.querySelector('.popup-call');
const closeCallButton = popupCall.querySelector('.popup-call__close');
const openCallButton = document.querySelector('.main-nav__button');
const popupCallButton = document.querySelector('.popup-call__button');
const formCall = document.querySelector('.popup-call__form');


openCallButton.addEventListener('click', (event) => {
    popupCall.style.display = "block";
    document.body.style.overflow = "hidden";
    popupCall.style.zIndex = "9999";
});

closeCallButton.addEventListener('click', () => {
    closePopupCall();
});

function closePopupCall() {
    popupCall.style.display = "none";
    document.body.style.overflow = "auto";
    popupCall.style.zIndex = "";
}

popupCallButton.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение кнопки
    if (formCall.checkValidity()) {
        closePopupCall();
        formCall.reset();
        openPopupSend();
    } else {
        alert('Заполните все обязательные поля формы!');
    }
});