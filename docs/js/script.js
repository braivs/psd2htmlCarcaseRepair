//окно popupCall 
let popupCall = document.querySelector(".popupCall");
//Клик по строке в заголовке "Заказать обратный звонок"
let openPopupCall1 = document.querySelector(".header-top-contact-subtitle");
openPopupCall1.onclick = function(event) {
    popupCall.style.visibility="visible";
}
//Нажатие на крестик в popupCall
let closePopupCall = document.querySelector(".closePopupCall");
closePopupCall.onclick = function(event) {
    event.preventDefault();
    popupCall.style.visibility="hidden";
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
//Нажатие на крестик в popupBidConfirm
let closePopupConfirm = document.querySelector(".closePopupConfirm");
closePopupConfirm.onclick = function(event) {
    popupBidConfirm.style.visibility="hidden";
}

//Окно 
let popupQuickCall = document.querySelector(".popupQuickCall");
//Клик на кнопку Быстрая заявка
let openPopupQuickCall = document.querySelector(".openPopupQuickCall");
openPopupQuickCall.onclick = function(event) {
    event.preventDefault();
    popupQuickCall.style.visibility="visible";
}
//Клик на крестик в окне popupQuickCall
let closePopupQuickCall = document.querySelector(".closePopupQuickCall");
closePopupQuickCall.onclick = function(event) {
    event.preventDefault();
    popupQuickCall.style.visibility="hidden";
}

//Нажатие на Esc для всех окон
addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        popupCall.style.visibility="hidden";
        popupBidConfirm.style.visibility="hidden";
        popupQuickCall.style.visibility="hidden";
    }
})