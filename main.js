document.addEventListener("DOMContentLoaded", () => {

    // card options
    const cardArray = [
        {
            name: 'bunny',
            image: './images/bunny.jpeg'
        },
        {
            name: 'bunny',
            image: './images/bunny.jpeg'
        },
        {
            name: 'banana',
            image: './images/banana.jpeg'
        },
        {
            name: 'banana',
            image: './images/banana.jpeg'
        },
        {
            name: 'dice',
            image: './images/dice.jpg'
        },
        {
            name: 'dice',
            image: './images/dice.jpg'
        },
        {
            name: 'flower',
            image: './images/flower.png'
        },
        {
            name: 'flower',
            image: './images/flower.png'
        }
    ]


    const grid = document.querySelector(".grid")

    function createBoard() {
        for(let i=0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', './images/empty.jpg')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }


    createBoard()








});