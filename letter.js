function letter(a) {
	this.character = a.toString(),
	this.guessed = false,
	this.guessCheck = function() {
		if (this.guessed) {
			return(this.character);
		} else {
			return("_");
		}
	},
	this.correct = function(c) {
		if (this.character === c) {
			this.guessed = true;
		} 
	}
}

function newLetter(a) {
	return new letter(a);
}

module.exports = {
    newLetter: newLetter
}
