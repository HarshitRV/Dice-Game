# DICE GAME
### A simple dice game .

### Play the game here : [PLAY](https://lucifer00911.github.io/Dice-Game/)

#

# JAVASCRIPT LOGIC

```
//Array of images that are used
const arrImg = ["images/1_dice.png","images/2_dice.png","images/3_dice.png","images/4_dice.png","images/5_dice.png","images/6_dice.png"]

//Function to select one of the images from the array
let newDice = (arrImg) => {
    let random = Math.floor(arrImg.length*Math.random())
    return arrImg[random]
}

//Assign the images to a first dice variable
var randomDice1 = newDice(arrImg);
//Another variable to save the number part from the image text of first dice 
var dice1Num = Number(randomDice1[7]);

//Assign the images to a second dice variable
var randomDice2 = newDice(arrImg);
//Another variable to save the number part from the image text of second dice
var dice2Num = Number(randomDice2[7]);


//Changing the <img> src attribute according to random image
document.getElementById("dice1").setAttribute("src",randomDice1)
document.getElementById("dice2").setAttribute("src",randomDice2)    


//Logic to check which player won ?
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
```
#