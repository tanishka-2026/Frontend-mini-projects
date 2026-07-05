let sum=0
let firstcard=7
let secondcard=4
sum= firstcard+secondcard
let hasblackjack=false
let isAlive= true
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
function startGame() {
    
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
    console.log(message)
}

/*
let age = 100
if(age<100)
{
    console.log("not eligible")
}
if(age===100)
{
    console.log("here's your birthday card from the King!")
}
else
{
    console.log("Not eligible, you already have gotten one")
}
*/

