document.addEventListener('DOMContentLoaded', () => {
    const popupMaterials = document.querySelector('.popup-materials');
    const closeButtonMaterials = popupMaterials.querySelector('.popup-materials__close');
    const openButtons = document.querySelectorAll('.materials__button');
    const popupMaterialsImg = document.querySelector('.popup-materials__img');
    const popupMaterialsName = document.querySelector('.popup-materials__name');
    const popupMaterialsButton = document.querySelector('.popup-materials__button');

    openButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const src = button.getAttribute('data-src');
            const name = button.getAttribute('data-name');
            popupMaterialsImg.src = src;
            popupMaterialsName.textContent = name;
            openPopupMaterials();
        });
    });

    closeButtonMaterials.addEventListener('click', () => {
        closePopupMaterials();
    });

    popupMaterialsButton.addEventListener('click', () => {
        closePopupMaterials();
    });

    function openPopupMaterials() {
        popupMaterials.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closePopupMaterials() {
        popupMaterials.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
