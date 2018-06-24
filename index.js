var words = require("./word");
var inquirer = require("inquirer");
var currentWord;
var guesses = 15;

function generateWord() {
	var possibleWords = ["drop", "earthy", "past", "motion", "charge", "digestion", "lively", "slimy", "crow", "flame", "cycle", "swing"];
	var number = Math.floor(Math.random() * possibleWords.length);
	var chosenWord = possibleWords[number];
	currentWord = words.createWord(chosenWord);
}

function startGame() {
	//check for win
	var winCheck = currentWord.winCheck();
	if (winCheck) {
		console.log("You win!");
		playAgain();
		return;
	}
	//print word
	console.log(currentWord.makeString());
	//letter guess
	inquirer.prompt([
    {
        "name": "guess",
        "type": "input", 
        "message": "What letter do you guess?"
    }
	]).then(answers => {
	    var guess = answers.guess.toString();
	    currentWord.check(guess);
	    guesses--
	    //guess check
	    if (guesses === 0) {
	    	console.log("No guesses remaining. You lose.")
	    	playAgain();
	    	return;
	    }
	    console.log(guesses + " guesses remaining")
	    startGame();
	});
}

//run game
generateWord();
startGame();


function playAgain() {
	inquirer.prompt([
    {
        "name": "again",
        "type": "confirm", 
        "message": "Would you like to play again?"
    }
	]).then(answers => {
	    var response = answers.again;
	    if(response) {
	    	guesses = 15;
	    	generateWord();
	    	startGame();
	    } else {
	    	console.log("Goodbye!")
	    }
	    
	});
}
