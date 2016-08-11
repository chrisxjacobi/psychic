var letter = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
];


var wins = 0;
var losses = 0;
var ties = 0;
var yourGuesses = [];
var guessesLeft = 7;


var computerChoice = letter[Math.floor(Math.random() * letter.length)];
console.log(computerChoice);

document.onkeyup = function(event) {
    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
}

    if (userChoice === computerChoice) {
        wins++; alert("You win! Play again");
        var winDiv = document.getElementById("win");
        winDiv.innerHTML = "wins: " + wins;

    } else {
        losses++;
        var loseDiv = document.getElementById("losses")
        loseDiv.innerHTML = "losses: " + losses;
        --guessesLeft;
        var guessesLeftDiv = document.getElementById("guessesLeft")
        guessesLeftDiv.innerHTML = "Guesses Left: " + guessesLeft;
    }

 	if (guessesLeft <= 0) {
 		alert("You lose!");
 	}




  function showToPage(userChoice) {
  document.querySelector(".showText").innerHTML = userChoice;
}

