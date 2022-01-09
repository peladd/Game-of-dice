// player 1
let randomNumber = Math.ceil(Math.random()*6)
// console.log(randomNumber);

let randomDiceImage = 'dice' + randomNumber + '.jpg';

let randomImageSource = 'images/' + randomDiceImage

let image = document.querySelectorAll('img')[0]
image.setAttribute('src', randomImageSource)


// player 2
let randomFigure= Math.ceil(Math.random()*6)

let randomDiceFigure = 'dice' + randomFigure + '.jpg';

let randomFigureSource = 'images/' + randomDiceFigure

let image2 = document.querySelectorAll('img')[1]

image2.setAttribute('src', randomFigureSource);

// conditional statements
if( randomNumber > randomFigure){
    document.querySelector('h1').innerText = 'Player1 wins 🎈'
}else if (randomFigure > randomNumber) {
    document.querySelector('h1').innerText = 'Player2 wins 🎈' 
} else {
    document.querySelector('h1').innerText = 'Draw 👩🏼‍🤝‍👩🏼' 
}