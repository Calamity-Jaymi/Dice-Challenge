
//PLayer One Dice Roll
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice = "images/dice" + randomNumber1 + ".png";
var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", randomDice);

//Play Two Dice Roll
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "images/dice" + randomNumber2 + ".png";
var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", randomDice2);

//Who is the winner conditional
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player One Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player Two is the Winner!";
}
else {
  document.querySelector("h1").innerHTML = "Looks like a draw!";
}
