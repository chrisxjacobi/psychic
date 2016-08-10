var letter = ["a", "b", "c", "d", "e","f", "g",
			  "h", "i", "j", "k", "l", "m", "n", 
			  "o", "p", "q", "r", "s", "t", "u", 
			  "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var ties = 0;

var computerChoice = letter[Math.floor(Math.random() * letter.length)];
console.log(computerChoice);

document.onkeyup = function(event) {
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase(); 

	if (userChoice === computerChoice) {
		wins++;
		var winDiv = document.getElementById("win");
		winDiv.innerHTML = "wins: " + wins;
	} else { 
		
	}
}

