let quoteId = document.querySelector('.advice_id');
let quoteText = document.querySelector('.advice_text');
let btn = document.querySelector('.dice');

const adviveUrl = "https://api.adviceslip.com/advice";

btn.addEventListener("click", () => {
    //fetch data
    fetch(adviveUrl)
        .then((resp) => resp.json())
        .then((resp) => {
            let slip = resp.slip;
            let id = slip.id;
            let advice = slip.advice;

            //injecting data
            quoteId.innerHTML = `Advice #${id}`;
            quoteText.innerHTML = `${advice}`;
    })
});