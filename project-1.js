//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        quote.textContent = `"${data.content}"`;
        person.textContent = data.author;
    } else {
        quote.textContent = "An error occured";
        console.log(data);
    }
}

btn.addEventListener("click", updateQuote);

updateQuote();
