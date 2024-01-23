import { openPopupSend } from './popup-send.js';

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.querySelector('.feedback__form');
    const feedbackButton = document.querySelector('.feedback__button');
    const popupSend = document.querySelector('.popup-send');

    feedbackButton.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение кнопки
        if (feedbackForm.checkValidity()) {
            openPopupSend(popupSend);
            feedbackForm.reset(); // Очищаем поля формы
        } else {
            alert('Заполните все обязательные поля формы!');
        }
    });
});
