document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.jpeg'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.jpeg'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.jpg'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.jpg'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.jpeg'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.jpeg'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.jpeg'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.jpeg'
        },
        {
            name: 'pizza',
            img: 'images/pizza.jpeg'
        },
        {
            name: 'pizza',
            img: 'images/pizza.jpeg'
        },
    ]

cardArray.sort(() => 0.5 - Math.random());    

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
//create game board
function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/blank.jpeg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard)
       grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You have found a match');
        cards[optionOneId].setAttribute('src', 'images/white.jpeg');
        cards[optionTwoId].setAttribute('src', 'images/white.jpeg');
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpeg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpeg');
        alert('sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!';
    }
}
//flip your card 
function flipcard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }

}

createBoard();
})

