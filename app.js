let n1 = Math.floor( Math.random() * 6 ) + 1
let randomDice1 = 'dice' + n1 + '.png'
let randomImage1 = 'img/' + randomDice1
let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomImage1)
