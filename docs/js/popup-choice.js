document.addEventListener('DOMContentLoaded', () => {
    const popup = document.querySelector('.popup-choice');
    const closeButton = popup.querySelector('.popup-choice__close');
    const choicePhotos = document.querySelectorAll('.choice__photo');


    choicePhotos.forEach(photo => {
        photo.addEventListener('click', () => {
            const imagePath = photo.querySelector('img').src; // получаем путь к изображению
            const popupPhoto = popup.querySelector('.popup-choice__photo');

            popup.style.display = "block";
            document.body.style.overflow = "hidden"; //фиксируем фон

            // устанавливаем изображение в модальное окно
            if (popupPhoto) {
                popupPhoto.src = imagePath;
            }
        });
    });

    closeButton.addEventListener('click', () => closeModal());

    // Функция для закрытия модального окна
    function closeModal() {
        popup.style.display = "none";
        document.body.style.overflow = "auto"; // разблокируем фон
    }
});