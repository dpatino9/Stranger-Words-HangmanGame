// GLOBAL VARIABLES
// ------------------------------------------------------
// ARRAYS AND VARIABLES

var wordOptions = ["spooky", "nightmare", "stranger", "creepy", "monster" ]
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;




//FUNCTIONS//
//-------------------------------------------------------

function startGame(){
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;

	//Reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	//Populate blanks and successes
	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	//Change HTML 
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;



	// Testing
	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
//check if letters exists 
	var isLetterInWord = false;

	for (var i=0; i<numBlanks; i++){
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}
//check where in the word the letter exists
	if(isLetterInWord) {
		for (var i=0; i<numBlanks; i++){
			if(selectedWord[i] == letter) {	
				blanksAndSuccesses[i] = letter;

			}
		}
	}
//letter not found
	else {
		wrongLetters.push(letter);
		guessesLeft--
	}

	//Testing
	console.log(blanksAndSuccesses);
}

function roundComplete(){
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);
	
	//update html to reflect all changes
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


	//if won
	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You Won");

	//update win counter html
		document.getElementById("winCounter").innerHTML = winCount;

		startGame();
	}

	//if lost
	else if (guessesLeft == 0) {
		lossCount++;
		alert("You Lost");

	//update loss counter html
		document.getElementById("lossCounter").innerHTML = lossCount;

		startGame();

	}

}


//MAIN PROCESS
//-------------------------------------------------------

//Initiate the game first time
startGame();

//Register Keyclicks

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	// Testing
	console.log(letterGuessed);

}





