const startBtn = document.querySelector('#start-game');
const cardsEl = document.querySelector('#cards-el');
const sumEl = document.querySelector('#sum-el');
const messageEl = document.querySelector('#top-message');
const newCardEl = document.querySelector('#new-card');

let cards = [];
let sum = 0;
let message = ''
let isAlive = false;
let hasBlackJack = false;

startBtn.addEventListener('click', startGame);
newCardEl.addEventListener('click', newCard);


function randomNumber() {
    const randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11
    }   else if (randomNumber > 10) {
        return 10
    }   else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = randomNumber();
    let secondCard = randomNumber();
     
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}


function renderGame() {
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += ` ${cards[i]}, `
    }
    sumEl.textContent = `Sum: ${sum}`

    if (sum === 21) {
        messageEl.textContent =  `Congratulation! You just got a Blackjack. Do you want to play again?`
        hasBlackJack = true
    } else if (sum > 21) {
        messageEl.textContent = `Oops! You just got bust. Start new game?`
        isAlive = false
    } else {
        messageEl.textContent = `Do you want to draw a new card?`
    }
}


function newCard() { 
    if (hasBlackJack === false && isAlive === true) {
        const newCard = randomNumber();
        cards.push(newCard);
        sum += newCard
        // cardsEl.textContent = `Cards:`
        renderGame()
    }
}





// let gameMessage = document.getElementById('top-message')
// let cards = document.getElementById('cards-el')
// let cardSum = document.getElementById('sum-el')
// let firstCard 
// let secondCard
// let hasBlackJack = false
// let isAlive = false



// function randomNumber() {
//    let randomNumber = Math.floor(Math.random() * 13) + 1
//    if (randomNumber === 1) {
//     return 11
//    } else if (randomNumber > 10) {
//     return 10
//    } else {
//     return randomNumber
//    }
// }

// function start() {
//     firstCard = randomNumber()
//     secondCard = randomNumber()
//     cards.textContent = `Cards: ${firstCard}, ${secondCard}`
//     let sum = firstCard + secondCard
//     cardSum.textContent = `Sum: ${sum}`

//     if (sum === 21) {
//         message = `Congratulation! You got Blackjack`
//         hasBlackJack = true
//     }   else if (sum <= 20) {
//         message = `Do you want to draw a new card?`
//         isAlive = true
//         hasBlackJack = false
//     }   else {
//         message = `GAME OVER!`
//         isAlive = false
//         hasBlackJack = false
//     }
//     gameMessage.textContent = message

// }

// function newCard() {
//     if (isAlive === true && hasBlackJack === false) {
//         let thirdCard = randomNumber()
//         cards.textContent = `Cards: ${firstCard}, ${secondCard}, ${thirdCard}`
//         sum = firstCard + secondCard + thirdCard
//         cardSum.textContent = `Sum: ${sum}`
//     if (sum === 21) {
//         message = `Congratulation! You got Blackjack`
//         hasBlackJack = true
//     }   else if (sum <= 20) {
//         message = `Do you want to draw a new card?`
//         isAlive = true
//         hasBlackJack = false
//     }   else {
//         message = `GAME OVER!`
//         isAlive = false
//     }
//     gameMessage.textContent = message
//     }

// }

