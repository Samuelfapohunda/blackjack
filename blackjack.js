let sum = 0
let hasBlackJack = false
let isAlive = false
let cards = []
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
let player = {
     name: "samuel",
    money: 145
}  
playerEl.textContent = player.name + ": $" + player.money
console.log(cards);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random()*13) + 1
  if (randomNumber > 10){
  return 10
  }
  else if (randomNumber === 1){
      return 11
  }
  else {
      return randomNumber
  }
  
}

function renderGame () {
    if (sum <= 20) {
    message = "Do you want to draw a new card"
  
}
else if (sum === 21) {
 message = "You got blackjack!"
 hasBlackJack = true
 }
else  {
    message = "You are out of the game"
    isAlive = false
}
messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
cardsEl.textContent = "Cards: " 

for (let i = 0; i < cards.length; i += 1) {
  cardsEl.textContent += cards[i] + " "
}

}

function newCard () {
 if (isAlive=== true && hasBlackJack === false) {
  let newCards = getRandomCard()
  sum += newCards 
 cards.push(newCards)
 console.log(cards);
  renderGame()
 }
}

function startGame () {
    isAlive = true
   let firstCard = getRandomCard()
     let secondCard = getRandomCard()
     cards = [firstCard, secondCard]
     sum = firstCard + secondCard
    renderGame()
}
  
























