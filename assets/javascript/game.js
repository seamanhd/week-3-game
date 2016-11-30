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


 var winCount = 0;

 var guessesLeft = 10;

 var dashes =[];

 var wrongGuesses = [];
	
var currentAnimal = ""

// FUNCTIONS

//reset function



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
		document.querySelector("#current").innerHTML = "Current Word: " + dashes;







	document.onkeyup = function () {

		if (guessesLeft>0) {
			console.log("rungame");
			guessesLeft--;
		}

		else {
			alert("Try Again");
			window.location.reload();
		}
	
		//if statement check guessesLeft for >0, then subtract one 
		//else statement end the game, run setUp
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
	}

	}

	runGame();

//how to replace the dashes? replace index value of dashes with index value of *new var* userIndex (index value of userGuess in currentAnimal) + write to html

//need to write dashes to current word DONE

// how to count a win at the end of the for loop? then run set up again? 

//DONE how to add multiple userGuess to #guessed without overwriting previous guess? -- new array = userGuesses and add new userGuess to array IF false

// LOOPS
