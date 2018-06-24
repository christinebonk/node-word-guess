var newLetter = require("./letter.js"); 

function word(input) {
	this.letters = [],
	this.createLetters = function() {
		var arr = input.split('');
		for (i=0; i < arr.length;i++) {
			var char = newLetter.newLetter(arr[i]);
			this.letters.push(char); 
		}
	},
	this.check = function(a) {
		for (i=0;i<this.letters.length;i++) {
			var thisLetter = this.letters[i];
			thisLetter.correct(a);
		}
	},
	this.makeString = function() {
		var display = "";
			for (var key in this.letters) {
				display = display + " " + this.letters[key].guessCheck();
			}
		return(display);
	},
	this.winCheck = function() {
		var gameEnd = true;
		for (var key in this.letters) {
			if (!this.letters[key].guessed) {
				gameEnd = false;
			} 	
		}
		if(gameEnd) {
			console.log("game over");
			return true;
		}
	}
};

function createWord(b) {
	var newWord = new word(b);
	newWord.createLetters();
	return newWord
}

module.exports = {
    createWord: createWord
}