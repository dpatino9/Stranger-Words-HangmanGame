 var words = ["bibliopole", "chad", "degust", "futz", "pinguid"];

    var choices = {
    	names: ["bibliopole", "chad", "degust", "futz", "pinguid"],
    	hint:  ["a person who buys and sells books, especially rare ones", "a piece of waste paper produced by punching a hole", "to taste food or drink carefully, so as to fully appreciate it",  "to waste time or busy oneself aimlessly", "oily or greasy"],
    	images: ["assets/images/bibliopole.gif", "assets/images/chad.gif", "assets/images/degust.gif", "assets/images/futz.gif", "assets/images/pinguid.gif"],
    	title: ["Who is bibliopole?", "What is a Chad?", "How to degust", "How to futz", "What is pinguid?"],
    	song: ["assets/songs/bibliopole.mp3", "assets/songs/chad.mp3", "assets/songs/degust.mp3", "assets/songs/futz.mp3", "assets/songs/pinguid.mp3"]
    
	};
    var wins = 0;
    var guessesLeft = 9;
    var yourGuess = [];
    var computerGuess = "";
    var showAnswer = [];
    var msg = {
    	win : "Congratulations! You Win!",
    	choose : "You already picked that letter.",
    	loss : "Sorry, you lose."
    }



//display image, title, song
function imgWin() {
	var message = words.indexOf(computerGuess);
    document.getElementById("winImg").src = choices.images[message];
    document.getElementById("info").innerHTML = choices.title[message];
    document.getElementById("audioPlace").src = choices.song[message];
};

//display hint
function msgHint() {
	var message = words.indexOf(computerGuess);
    document.getElementById("hint").innerHTML = choices.hint[message];
};


//computer chooses word
function newGame() {
    computerGuess = words[Math.floor(Math.random() * words.length)];
    msgHint();



//write word in underscores
for (var i=0; i < computerGuess.length; i++){
	showAnswer.push("_");
	if (computerGuess.indexOf(i) == " ") {
		showAnswer[i] = " ";
	}
	}
	document.getElementById("currentWord").innerHTML = showAnswer.join(' ');
};




//check for Wins
			function checkWin(){	
				if (wins == computerGuess.length) {
				imgWin();
				guess = false;
				alert(msg.win);
				guessesLeft = 9;
    			yourGuess = [];
    			computerGuess = "";
    			showAnswer = [];
				guessesLeft = 9;
				wins = 0;
				userGuess = "";
				document.getElementById("yourPlace").innerHTML = yourGuess;
	        	document.getElementById("guessPlace").innerHTML = guessesLeft;
				newGame();
				}
			}

			//Check for loss
	function checkLoss(){
		if (guessesLeft < 1) {
			guess = false;
			alert(msg.loss);
			guessesLeft = 9;
	    	yourGuess = [];
	    	computerGuess = "";
	    	showAnswer = [];
			guessesLeft = 9;
			document.getElementById("yourPlace").innerHTML = yourGuess;
		    document.getElementById("guessPlace").innerHTML = guessesLeft;
			newGame();
			}
	}




//user chooses letter

		document.onkeyup = function(event) {
	     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	     document.getElementById("message").innerHTML = "";
		var guess = true;
	
//check for previously picked letter
	
	if (showAnswer.indexOf(userGuess) != -1) {
			document.getElementById("message").innerHTML = msg.choose;
			return false;
		}






//loop through computerGuess


for (var i =0; i < computerGuess.length; i++) {


	        	
			if (userGuess == computerGuess.charAt(i)) {
				wins++;
				guess = false;

	        		showAnswer[i] = userGuess;
				
				document.getElementById("currentWord").innerHTML = showAnswer.join(' ');
				

	        	} else if (computerGuess.indexOf(userGuess) == -1 && guess == true && yourGuess.indexOf(userGuess) == -1) {

	        		yourGuess.push(userGuess);

	        		guessesLeft --;
					
					guess = false;
				
	        		document.getElementById("yourPlace").innerHTML = yourGuess;

	        		document.getElementById("guessPlace").innerHTML = guessesLeft;
					

				}
				checkWin();
				checkLoss();
				
	   		 	}
			}



window.onLoad = newGame();