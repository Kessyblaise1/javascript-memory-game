const cardArray = [
    {
        name: 'unicon',
        image: './images/unicon.gif'
    },
    {
        name: 'unicon',
        image: './images/unicon.gif'
    },
    {
        name: 'bird',
        image: './images/bird.gif'
    },
    {
        name: 'bird',
        image: './images/bird.gif'
    },
    {
        name: 'cute-girl',
        image: './images/cute-girl.gif'
    },
    {
        name: 'cute-girl',
        image: './images/cute-girl.gif'
    },
    {
        name: 'hot-tea',
        image: './images/hot-tea.png'
    },
    {
        name: 'hot-tea',
        image: './images/hot-tea.png'
    },
    {
        name: 'blue-unicon',
        image: './images/blue-unicon.gif'
    },
    {
        name: 'blue-unicon',
        image: './images/blue-unicon.gif'
    },
    {
        name: 'cat',
        image: './images/cat.png'
    },
    {
        name: 'cat',
        image: './images/cat.png'
    }
]


cardArray.sort(() => 0.5 - Math.random())

let gameBoard = document.querySelector(".game-board")
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []


function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('div')
        card.classList.add("flip-card")
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="./images/cover.png" />
                </div>
                <div class="flip-card-back">
                    <img src="" alt="" />
                </div>
            </div>
        `
        card.setAttribute('data-id', i)
        card.addEventListener('click', flip)
        gameBoard.appendChild(card)
    }
}


function flip() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    let backImage = this.querySelector(".flip-card-back img")
    backImage.setAttribute('src', cardArray[cardId].image)
    this.classList.toggle("active")
    this.classList.add('clicked')
    if(cardsChosen.length === 2) {
        setTimeout(() => {
            let cards = document.querySelectorAll('.flip-card')
            const optionOneId = cardsChosenId[0]
            const optionTwoId = cardsChosenId[1]
            if(cardsChosen[0] === cardsChosen[1]) {
                popUp('success', 'You found a matching pair')
                cards[optionOneId].childNodes[1].remove()
                cards[optionOneId].classList.add("clicked")
                cards[optionTwoId].childNodes[1].remove()
                cards[optionTwoId].classList.add("clicked")
                cardsWon.push(cardsChosen)
                resultDisplay.textContent = cardsWon.length += 4
            }else{
                popUp("warning", "Tiles do not Match")
                let activeElement = document.querySelectorAll('.flip-card.active')
                activeElement.forEach(ele => {
                    ele.classList.remove("active")
                })
                cards[optionOneId].classList.remove("clicked")
                cards[optionTwoId].classList.remove("clicked")
                if(resultDisplay.textContent == 1){
                    resultDisplay.textContent = cardsWon.length -= 1
                }else if(resultDisplay.textContent > 1){
                    resultDisplay.textContent = cardsWon.length -= 2
                }
            }
        }, 800)
        setTimeout(() => {
            cardsChosen = []
            cardsChosenId = []
        }, 900)
    }
}

function popUp(className, message) {
    let alertBox = document.querySelector(".alert")
    alertBox.innerHTML = `
        <h6 class="${className}">${message}</h6>
    `
    alertBox.style.display = "flex";
    setTimeout(() => {
        alertBox.style.display = "none"
    }, 1500);
}

createBoard()