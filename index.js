const arrImg = ["images/1_dice.png","images/2_dice.png","images/3_dice.png","images/4_dice.png","images/5_dice.png","images/6_dice.png"]


let newDice = (arrImg) => {
    let random = Math.floor(arrImg.length*Math.random())
    return arrImg[random]
}

var randomDice1 = newDice(arrImg);
var dice1Num = Number(randomDice1[7]);

var randomDice2 = newDice(arrImg);
var dice2Num = Number(randomDice2[7]);

document.getElementById("dice1").setAttribute("src",randomDice1)
document.getElementById("dice2").setAttribute("src",randomDice2)    



if(dice1Num === dice2Num){
    document.getElementById("refresh").textContent = "Draw"
}
else if(dice1Num > dice2Num){
    document.getElementById("refresh").textContent = "Player 1 Wins"
}
else{
    document.getElementById("refresh").textContent = "Player 2 Wins"
}

console.log(randomDice)

