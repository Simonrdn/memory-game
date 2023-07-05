document.addEventListener('DOMContentLoaded', () => {
// card options
const cardArray = [
    {
        name : 'fries',
        img : 'Src/images/fries.png'
    },
    {
        name : 'cheeseburger',
        img: 'Src/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'Src/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'Src/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'Src/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'Src/images/hotdog.png'
    },
    {
        name : 'fries',
        img : 'Src/images/fries.png'
    },
    {
        name : 'cheeseburger',
        img: 'Src/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'Src/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'Src/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'Src/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'Src/images/hotdog.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('Src', 'Src/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function flipCard(){
let cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenIds.push(cardId)
this.setAttribute('Src', cardArray[cardId].img)
if (cardsChosen.length === 2){
    setTimeout(checkForMatch, 500)
}
console.log(cardsChosenIds)
}

function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

if (optionOneId == optionTwoId){
    alert('You Have Clicked The Same Image!')
    cards[optionOneId].setAttribute('Src','Src/images/blank.png')
    cards[optionTwoId].setAttribute('Src','Src/images/blank.png')
}else if (cardsChosen[0] === cardsChosen[1]) {
   alert('You Have Found a Match!') 
   cards[optionOneId].setAttribute('Src','Src/images/white.png')
   cards[optionTwoId].setAttribute('Src','Src/images/white.png')
   cards[optionOneId].removeEventListener('click', flipCard)
   cards[optionTwoId].removeEventListener('click', flipCard)
   cardsWon.push(cardsChosen)
}else{
    cards[optionOneId].setAttribute('Src','Src/images/blank.png')
    cards[optionTwoId].setAttribute('Src','Src/images/blank.png')
    alert('Sorry, Try Again!')
}
cardsChosen = []
cardsChosenIds = []
resultDisplay.textContent = cardsWon.length
if (cardsWon.length === cardArray.length /2){
    resultDisplay.textContent = 'Congratulations! You Have Won!'
}

console.log(cardsChosen)
console.log(cardsWon)
}
createBoard()

})