import { openPopupSend } from './popup-send.js';

document.addEventListener('DOMContentLoaded', () => {
    const calcForm = document.querySelector('.form__calc');
    const calcButton = document.querySelector('.calc__button');
    const popupSend = document.querySelector('.popup-send');

    calcButton.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение кнопки
        if (calcForm.checkValidity()) {
            openPopupSend(popupSend);
            calcForm.reset(); // Очищаем поля формы
        } else {
            alert('Заполните все обязательные поля формы!');
        }
    });
});
