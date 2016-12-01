
//-----------------------------------------------------------------------------
// GLOBAL VARIABLES
//-----------------------------------------------------------------------------

var animalList = [
	"zebra",
	"tiger",
	"horse",
	"snake",
	"mouse"
	]

// var winCount = number of wins
 var winCount = 1;

// var guessesLeft = number of remaining guesses
 var guessesLeft = "";

// var dashes = array to be used during each round
 var dashes =[];

// var wrongGuesses = array of incorrect guesses
 var wrongGuesses = [];

// var currentAnimal = random animal from animalList	
var currentAnimal = "";



// ----------------------------------------------------------------------------
// FUNCTIONS
//------------------------------------------------------------------------------

var setUp = function () {
	// pick a random animal ----- not a global variable??
		currentAnimal = animalList[Math.floor(Math.random() * animalList.length)];
	console.log(currentAnimal);

	//setting guess count
		guessesLeft = 10;

	// split up letters of current animal
	currentAnimal.split("");
	//for (var i=0;i<currentAnimal.length;i++) {console.log(currentAnimal[i])};

	//create array of dashes
	for (var i=0;i<currentAnimal.length;i++) {
		dashes.push(" _ ");
	}

	//write dashes to the page
		document.querySelector("#current").innerHTML = "Current Word: " + dashes[0] + dashes[1] + dashes[2] + dashes[3] + dashes[4];
		//console.log(dashes)

}




// checking to see how many guesses are left 
var checkGuessCount = function () {
	if (guessesLeft>0) {
			//console.log("rungame");
			guessesLeft--;
		}

		else  {
			document.querySelector("#instructions").innerHTML = "Game over. Press any key to try again!";
			reset();
		}
}



// checking to see if user guessed a correct letter or a wrong letter
var checkUserGuess = function () {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);



	if (currentAnimal.indexOf(userGuess) > -1) {
			console.log(true)
			var guessIndex = currentAnimal.indexOf(userGuess);
			console.log(guessIndex);
			dashes.splice(guessIndex, 1, userGuess);
			console.log(dashes);
			document.querySelector("#remaining").innerHTML = "Guesses remaining: " + guessesLeft;
			document.querySelector("#current").innerHTML = "Current Word: " + dashes[0] + dashes[1] + dashes[2] + dashes[3] + dashes[4];

		}


		else {
			console.log(false)
			document.querySelector("#remaining").innerHTML = "Guesses Remaining: " + guessesLeft;
			wrongGuesses.push(" " + userGuess);
			console.log(wrongGuesses);
			document.querySelector("#guessed").innerHTML = "Letters Already Guessed: " + wrongGuesses;

		}

		

}

// checking to see if the user has guessed all letters 
var checkWin = function () {

	var letterOne = dashes[0];
	var letterTwo = dashes[1];
	var letterThree = dashes[2];
	var letterFour = dashes[3];
	var letterFive = dashes[4];
	var guessToCheck = letterOne + letterTwo + letterThree + letterFour + letterFive;
	console.log(guessToCheck);

	if (guessToCheck === currentAnimal) {
		document.querySelector("#instructions").innerHTML = "You Win! <br/> Correct answer: " + currentAnimal + "<br/> Press any key to play again!";
		
		document.querySelector("#winner").innerHTML = "Wins: " + winCount++;

		reset();
	}

	



}


// a function to call other functions!
var runGame = function () {
	setUp();

	document.onkeyup = function () {
	
	checkUserGuess();
	checkWin();
	checkGuessCount();
	}
}

// --------------------------------------------------------------------------------------
// THE ACTUAL GAME! 

	runGame ();

var reset = function () {
	guessesLeft = 10;
	document.querySelector("#remaining").innerHTML = "Guesses remaining: " + guessesLeft;
	dashes =[];
	wrongGuesses=[];
	document.querySelector("#guessed").innerHTML = "Letters Already Guessed: " + wrongGuesses;
	currentAnimal="";
	runGame();
}


	