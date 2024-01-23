import { openPopupBid } from './popup-bid.js';

document.addEventListener('DOMContentLoaded', () => {
    const popularList = document.querySelector('.popular__list');
    const popup = document.querySelector('.popup');
    const modal = document.querySelector('.popup-catalog');
    const modalPhoto = modal.querySelector('.popup-catalog__photo');
    const closeButton = modal.querySelector('.popup__close');
    const descriptionButton = modal.querySelector('.popup-catalog__button--description');
    const characteristicButton = modal.querySelector('.popup-catalog__button--characteristic');
    const descriptionContent = modal.querySelector('.popup-catalog__description');
    const characteristicContent = modal.querySelector('.popup-catalog__characteristic');
    const buttonBid = popup.querySelector('.button__popup-catalog');


    popularList.addEventListener('click', (event) => {
        const card = event.target.closest('.popular__item');
        event.stopPropagation();

        if (card) {
            const kitchenName = card.querySelector('.card__name').textContent;
            const kitchenPrice = card.querySelector('.card__price').textContent;
            const kitchenOldPrice = card.querySelector('.card__old').textContent;
            const kitchenDescription = card.querySelector('.card__description').textContent;
            const kitchenCharacteristic = card.querySelector('.card__characteristic').textContent;
            const kitchenPhoto = card.querySelector('.card__photo');

            // Получаем относительный путь к изображению из data-src
            const relativePhotoPath = kitchenPhoto.dataset.src;

            // Получаем абсолютный путь к изображению
            const absolutePhotoPath = window.location.origin + '/' + relativePhotoPath;

            // Передаем данные в модальное окно
            fillModal(kitchenName, kitchenPrice, kitchenOldPrice, kitchenDescription, kitchenCharacteristic, absolutePhotoPath);

            // Открываем модальное окно
            modal.style.display = "block";
            popup.style.display = "block";
            document.body.style.overflow = "hidden"; //фиксируем фон
        }
    });

    // Обработчик события для закрытия модального окна по кнопке
    closeButton.addEventListener('click', () => closeModal());


    //закрытие формы по клику на область вокруг формы
    popup.addEventListener('click', (e) => { 
        if (e.target === popup) {
            closeModal();
        }
    });

    // Функция для закрытия модального окна
    function closeModal() {
        modal.style.display = "none";
        popup.style.display = "none";
        document.body.style.overflow = "auto"; // разблокируем фон
    }


    // Функция для заполнения модального окна данными
    function fillModal(name, price, oldPrice, description, characteristic, photoSrc) {
        const modalTitle = modal.querySelector('.popup-catalog__title');
        const modalPrice = modal.querySelector('.popup-catalog__price');
        const modalOldPrice = modal.querySelector('.popup-catalog__old');
        const modalDescription = modal.querySelector('.popup-catalog__description');
        const modalCharacteristic = modal.querySelector('.popup-catalog__characteristic');


        // Заполняем данными
        modalTitle.textContent = name;
        modalPrice.textContent = price;
        modalOldPrice.textContent = oldPrice;
        modalDescription.textContent = description;
        modalCharacteristic.textContent = characteristic;

        // Обновляем фотографию
        modalPhoto.setAttribute('src', photoSrc);
        modalPhoto.setAttribute('alt', name);
    }

    // Обработчик события для кнопки "Описание"
    descriptionButton.addEventListener('click', () => {
        characteristicButton.classList.remove('popup-catalog__button--description--active');
        descriptionButton.classList.add('popup-catalog__button--description--active');
        descriptionContent.style.display = 'block';
        characteristicContent.style.display = 'none';
    });
    
    // Обработчик события для кнопки "Характеристики"
    characteristicButton.addEventListener('click', () => {
        characteristicButton.classList.add('popup-catalog__button--description--active');
        descriptionButton.classList.remove('popup-catalog__button--description--active');
        descriptionContent.style.display = 'none';
        characteristicContent.style.display = 'block';
    });

    buttonBid.addEventListener('click', () => {
        openPopupBid();
        closeModal();
        document.body.style.overflow = "hidden";
    });
});


