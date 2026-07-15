let sum=0
let firstcard=7
let secondcard=4
sum= firstcard+secondcard
let hasblackjack=false
let isAlive= true
let message = ""
let messageEl=document.querySelector("#message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")
function startGame() { 
    cardsEl.textcontent="Cards: "+firstcard+" "+secondcard  
    sumEl.textContent=""+sum
    if(sum <= 20)
    {
        message = "Do you want to draw a new card?"
    }
    else if (sum===21)
    {
        message= "Woohoo! You got Blackjack!"
        hasblackjack=true
    }
    else
    {
       message="Sorry, you are out of the game! :("
       isAlive = false
    }
    messageEl.textContent=message
}