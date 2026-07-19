// Starting cards
let firstCard = 7;
let secondCard = 4;

// Total
let sum = firstCard + secondCard;

// Store cards
let cards = [firstCard, secondCard];

// Game status
let hasBlackJack = false;
let isAlive = true;

// Message
let message = "";

// HTML elements
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
v
function startGame() {

    cardsEl.textContent =  cards.join(" ");
    sumEl.textContent = sum;

    if (sum <= 20) {

        message = "Do you want to draw a new card?";

    } else if (sum === 21) {

        message = "Woohoo! You've got Blackjack!";
        hasBlackJack = true;

    } else {

        message = "Sorry, you're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {

    if (isAlive && !hasBlackJack) {

        let card =4;

        cards.push(card);

        sum += card;

        startGame();
    }
}