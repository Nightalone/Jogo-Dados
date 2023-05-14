let n1 = Math.floor( Math.random() * 6 ) + 1
let randomDice1 = 'img/dice' + n1 + '.png'
let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomDice1)

let n2 = Math.floor( Math.random() * 6 ) + 1
let randomDice2 = 'img/dice' + n2 + '.png'
let image2 = document.querySelectorAll('img')[1]
image2.setAttribute('src', randomDice2)

if(n1 > n2){
    document.querySelector('h1').innerHTML = 'Jogador 1 Venceu! 🏆'
}else if(n2 > n1){
    document.querySelector('h1').innerHTML = 'Jogador 2 Venceu! 🏆'
}else{
    document.querySelector('h1').innerHTML = 'Empate'
}