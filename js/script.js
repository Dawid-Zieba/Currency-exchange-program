let moneyElement = document.querySelector(".js-money");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let summaryElement = document.querySelector(".js-summary");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let money = moneyElement.value ;
    let currency = currencyElement.value ;

    let summary = money * currency;

    summaryElement.innerText = summary;

});