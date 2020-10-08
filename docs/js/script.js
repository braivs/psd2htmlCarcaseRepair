//затемнение экрана
let backgroundHalfDark = document.querySelector(".backgroundHalfDark");

//окно popupCall 
let popupCall = document.querySelector(".popupCall");
//Клик по строке в хэдере "Заказать обратный звонок"
let openPopupCall1 = document.querySelector(".header-top-contact-subtitle");
openPopupCall1.onclick = function(event) {
    popupCall.style.visibility="visible";
    backgroundHalfDark.style.visibility="visible";
}
//Клик на крестик в popupCall
let closePopupCall = document.querySelector(".closePopupCall");
closePopupCall.onclick = function(event) {
    event.preventDefault();
    popupCall.style.visibility="hidden";
    backgroundHalfDark.style.visibility="hidden";
}
//Клик на кнопку отправить в popupCall
let popupCallSend = document.querySelector(".popupCallSend");
popupCall.onsubmit = function(event) {
    event.preventDefault();
    popupCall.style.visibility="hidden";
    popupBidConfirm.style.visibility="visible";
}
//Окно popupBidConfirm
let popupBidConfirm = document.querySelector(".popupBidConfirm");
//Клик на крестик в popupBidConfirm
let closePopupConfirm = document.querySelector(".closePopupConfirm");
closePopupConfirm.onclick = function(event) {
    event.preventDefault();
    popupBidConfirm.style.visibility="hidden";
    backgroundHalfDark.style.visibility="hidden";
}

//Окно 
let popupQuickCall = document.querySelector(".popupQuickCall");
//Клик на кнопку Быстрая заявка
let openPopupQuickCall = document.querySelector(".openPopupQuickCall");
openPopupQuickCall.onclick = function(event) {
    event.preventDefault();
    popupQuickCall.style.visibility="visible";
    backgroundHalfDark.style.visibility="visible";
}
//Клик на крестик в окне popupQuickCall
let closePopupQuickCall = document.querySelector(".closePopupQuickCall");
closePopupQuickCall.onclick = function(event) {
    event.preventDefault();
    popupQuickCall.style.visibility="hidden";
    backgroundHalfDark.style.visibility="hidden";
}
//Клик на Отправить заявку в popupQuickCall = открытие popupConfirm
let openPopupConfirm1 = document.querySelector(".openPopupConfirm1");
openPopupConfirm1.onclick = function(event) {
    event.preventDefault();
    popupQuickCall.style.visibility="hidden";
    popupBidConfirm.style.visibility="visible";
}

//Переходной к Подробной заявке
let goToBullBid = document.querySelector(".goToBullBid");
goToBullBid.onclick = function(event) {
    event.preventDefault();
    document.location.href="#fullBid";
}
//Клик на Узнать цену = открытие popupBidConfirm
let openPopupConfirm2 = document.querySelector(".openPopupConfirm2");
openPopupConfirm2.onclick = function(event) {
    event.preventDefault();
    popupBidConfirm.style.visibility="visible";
    backgroundHalfDark.style.visibility="visible";
}
//Клик на Заказать консультацию = открытие popupBidConfirm
let openPopupConfirm3 = document.querySelector(".openPopupConfirm3");
openPopupConfirm3.onclick = function(event) {
    event.preventDefault();
    popupBidConfirm.style.visibility="visible";
    backgroundHalfDark.style.visibility="visible";
}
//Клик по строке в футере "Заказать обратный звонок"
let openPopupCall2 = document.querySelector(".footer-top-contact-subtitle");
openPopupCall2.onclick = function(event) {
    popupCall.style.visibility="visible";
    backgroundHalfDark.style.visibility="visible";
}

//Клик на Esc для всех окон + убрать затемнение
addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        popupCall.style.visibility="hidden";
        popupBidConfirm.style.visibility="hidden";
        popupQuickCall.style.visibility="hidden";
        backgroundHalfDark.style.visibility="hidden";
    }
})