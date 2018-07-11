const letters = 'abcdefghijklmnopqrstuvwxyz';

function generateRandomKey() {
	let randomKey = '';

	for (let i = 0; i < 100; i++) {
		randIndex = Math.floor(Math.random() * letters.length);
		randomKey += letters[randIndex];
	}
	return randomKey;
}

function Cipher(key) {
	if (key !== undefined) {
		let onlyLowercaseLetters = (/^[a-z]+$/.test(key))

		if ( ( key === '') || !onlyLowercaseLetters ) throw ('Bad key');
	}
	this.key = key || generateRandomKey();
}

Cipher.prototype.encode = function(text) {
	let self = this;
	let characters = text.split('');
	let encodedChars = [];

	characters.forEach(function(character, index) {
		let newIndex = letters.indexOf(character) + 
					   letters.indexOf(self.key[index]);

		if (newIndex >= letters.length) { newIndex -= letters.length }

		encodedChars.push(letters[newIndex]);
	});
	return encodedChars.join('');
};

Cipher.prototype.decode = function(cipher) {
	let self = this;
	let characters = cipher.split('');
	let decodedChars = [];

	characters.forEach(function(character, index) {
		let newIndex = letters.indexOf(character) - 
					   letters.indexOf(self.key[index]);

		if (newIndex < 0) { newIndex += letters.length }

		decodedChars.push(letters[newIndex]);
	});
	return decodedChars.join('');
};

module.exports = Cipher;