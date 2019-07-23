
var posRandom = Math.floor(Math.random() * 5);
var posOne = posRandom;
var posTwo = posRandom + 1;
var posThree = posRandom + 2;
var guess;
var guesses = 0;
var hits = 0;
var isSunk = false;


while (isSunk == false) {
  guess = prompt ("Please enter a number from 0 to 6: ");
  if (guess < 0 || guess > 6) {
    alert ("Please enter a valid number");
  }
    else {
    guesses = guesses + 1;
      if (guess == posOne || guess == posTwo || guess == posThree)
      {
        alert("HIT!");
        hits = hits + 1;
        if (hits === 3) {
          isSunk = true;
        alert ("You sank my ship!");}

      }
      else
      {
        alert ("MISS");
      }
    }

}