import { openPopupSend } from './popup-send.js';

const popupBid = document.querySelector('.popup-bid');
const closeButtonBid = popupBid.querySelector('.popup-bid__close');
const popupButtonBid = popupBid.querySelector('.button__form');
const form = document.querySelector('.popup-bid__form');
const popupBidDescription = document.querySelector('.popup-bid__description');
const popupCatalogTitle = document.querySelector('.popup-catalog__title');
const popupCatalogPrice = document.querySelector('.popup-catalog__price');
const popupCatalogOld = document.querySelector('.popup-catalog__old');
const popupBidPrice = document.querySelector('.popup-bid__old');
const popupBidOld = document.querySelector('.popup-bid__price');
const popupCatalogPhoto = document.querySelector('.card__photo');
const popupBidPhoto = document.querySelector('.popup-bid__photo');


export function openPopupBid() {
    popupBid.style.display = "block";
    document.body.style.overflow = "hidden";
    popupBid.style.zIndex = "9999";
    if (popupBidDescription && popupCatalogTitle) {
        // Заполняем текст в popup-bid__description из popup-catalog__title
        popupBidDescription.textContent = popupCatalogTitle.textContent;
    }
    if (popupCatalogPrice && popupCatalogOld && popupBidOld && popupBidPrice) {
        // Заполняем цены в popup-bid из popup-catalog
        popupBidOld.textContent = popupCatalogPrice.textContent;
        popupBidPrice.textContent = popupCatalogOld.textContent;
    }
    if (popupCatalogPhoto && popupBidPhoto) {
        // Заполняем фото в popup-bid из popup-catalog
        popupBidPhoto.src = popupCatalogPhoto.src;
        popupBidPhoto.alt = popupCatalogPhoto.alt;
    }

}

function closePopupBid() {
    popupBid.style.display = "none";
    document.body.style.overflow = "auto";
    popupBid.style.zIndex = "";
}

closeButtonBid.addEventListener('click', () => {
    closePopupBid();
});


popupButtonBid.addEventListener('click', (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        closePopupBid();
        openPopupSend();
    } else {
        alert('Заполните все обязательные поля формы!');
    }
});
