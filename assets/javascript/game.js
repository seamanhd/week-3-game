// VARIABLES

var animalList = [
	"zebra",
	"tiger",
	"horse",
	"snake",
	"mouse"
	]

// var userGuess = key pressed

// var currentAnimal = random animal from animalList	

// var winCount = number of wins

// var guessesLeft = number of remaining guesses 


 var winCount = 1;

 var guessesLeft = "";

 var dashes =[];

 var wrongGuesses = [];
	
var currentAnimal = "";

var animalToCheck = [];

var dashString = "";

// ----------------------------------------------------------------------------
// FUNCTIONS

//reset function






var setUp = function () {
	// pick a random animal ----- not a global variable??
		currentAnimal = animalList[Math.floor(Math.random() * animalList.length)];
	console.log(currentAnimal);
	//setting guess count
		guessesLeft = 10
	// split up letters of current animal
	currentAnimal.split("");
	for (var i=0;i<currentAnimal.length;i++) {console.log(currentAnimal[i])}
	//create array of dashes
	for (var i=0;i<currentAnimal.length;i++) {
		dashes.push(" _ ");
	}

	for (var i=0;i<currentAnimal.length;i++) {
		animalToCheck.push(currentAnimal[i]);
		
	}

	console.log(animalToCheck);


	//write dashes to the page
		
		document.querySelector("#current").innerHTML = "Current Word: " + dashes[0] + dashes[1] + dashes[2] + dashes[3] + dashes[4];
		console.log(dashes)

}





var checkGuessCount = function () {
	if (guessesLeft>1) {
			console.log("rungame");
			guessesLeft--;
		}

		else  {
			alert("Game Over. Try Again!");
			reset();
		}
}




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



var runGame = function () {
	setUp();

	document.onkeyup = function () {
	checkGuessCount();
	checkUserGuess();
	checkWin();
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


	/*
	//prep the game 
var runGame = function () {
	// pick a random animal ----- not a global variable??
	currentAnimal = animalList[Math.floor(Math.random() * animalList.length)];
	console.log(currentAnimal);
	// split up letters of current animal
	currentAnimal.split("");
	for (var i=0;i<currentAnimal.length;i++) {console.log(currentAnimal[i])}
	//create array of dashes
	for (var i=0;i<currentAnimal.length;i++) {
		dashes.push(" _ ");
		
	}
	//write dashes to the page
		document.querySelector("#current").innerHTML = "Current Word: " + dashes;






		//when user presses key ...
	document.onkeyup = function () {

		//if they have guesses left, take away one of their guesses
		if (guessesLeft>0) {
			console.log("rungame");
			guessesLeft--;
		}

		else  {
			endGame();
		}



		

		
	
		
		// identify key that user guessed	
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);

		//checking userGuess against the array
		if (currentAnimal.indexOf(userGuess) > -1) {
			console.log(true)
			var guessIndex = currentAnimal.indexOf(userGuess);
			console.log(guessIndex);
			dashes.splice(guessIndex, 1, userGuess);
			console.log(dashes)
			document.querySelector("#current").innerHTML = "Current Word: " + dashes;
		}
		else {
			console.log(false)
			document.querySelector("#remaining").innerHTML = "Guesses remaining: " + guessesLeft;
			wrongGuesses.push(" " + userGuess);
			console.log(wrongGuesses);
			document.querySelector("#guessed").innerHTML = "Already guessed: " + wrongGuesses;

		}

		//checking if they won!

		if (dashes === currentAnimal) {
			alert("You Win!!!");
		}
	}

	}

	runGame();*/

//how to replace the dashes? replace index value of dashes with index value of *new var* userIndex (index value of userGuess in currentAnimal) + write to html

//need to write dashes to current word DONE

// how to count a win at the end of the for loop? then run set up again? 

//DONE how to add multiple userGuess to #guessed without overwriting previous guess? -- new array = userGuesses and add new userGuess to array IF false

// LOOPS
