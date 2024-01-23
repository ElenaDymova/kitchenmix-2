// const popupSend = document.querySelector('.popup-send');
// const closeButtonSend = popupSend.querySelector('.popup-send__close');

// export function openPopupSend(popupSend) {
//     popupSend.style.display = "block";
//     document.body.style.overflow = "hidden";
//     popupSend.style.zIndex = "9999";
// }

// function closePopupSend(popupSend) {
//     popupSend.style.display = "none";
//     document.body.style.overflow = "auto";
//     popupSend.style.zIndex = "";
// }

// closeButtonSend.addEventListener('click', () => {
//     closePopupSend(popupSend);
// });


const popupSend = document.querySelector('.popup-send');
const closeButtonSend = popupSend.querySelector('.popup-send__close');

export function openPopupSend() {
    popupSend.style.display = "block";
    document.body.style.overflow = "hidden";
    popupSend.style.zIndex = "9999";
}

function closePopupSend() {
    popupSend.style.display = "none";
    document.body.style.overflow = "auto";
    popupSend.style.zIndex = "";
}

closeButtonSend.addEventListener('click', () => {
    closePopupSend();
});
