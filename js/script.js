{
    const onFormSubmit =(event) => {
        event.preventDefault();

        const moneyElement = document.querySelector(".js-money");
        const currencyElement = document.querySelector(".js-currency");
        const summaryElement = document.querySelector(".js-summary");

        const money = moneyElement.value;
        const currency = currencyElement.value;

        const summary = money * currency;

        summaryElement.innerText = summary.toFixed(2);
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit,)
    };

init();
}