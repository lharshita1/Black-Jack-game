
let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player={
    name:"Harshita",
    chips:145
}

let playerEL = document.getElementById("player-el");
playerEL.textContent= player.name + " : $" + player.chips;

function startGame() {
    isAlive=true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard,secondCard);
    sum = firstCard+secondCard
    console.log(firstCard,secondCard)    
    renderGame()
}
console.log(cards)
function renderGame() {
    // 2. Refer to the cards array when rendering out the cards
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if ( isAlive===true && hasBlackJack===false ){
    let card = getRandomCard();
    cards.push(card)
    sum += card
    renderGame()
    }
}

function getRandomCard(){
    let randomCard= Math.floor(Math.random()*13)+1;
    if(randomCard===1){
        return 11
    } else if( randomCard>10){
        return 10
    }else{
    return randomCard;
}
}
