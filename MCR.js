function encode()
{
	
var message = document.getElementById("message").value;	
var message2 = message.toLowerCase();
var alphabet = {    'a': '.-',    'b': '-...',	 'c': '-.-.', 'd': '-..',
    'e': '.',     	'f': '..-.',  'g': '--.', 	 'h': '....',
    'i': '..',    	'j': '.---',  'k': '-.-',  	 'l': '.-..',
    'm': '--',    	'n': '-.',    'o': '---', 	 'p': '.--.',
    'q': '--.-', 	'r': '.-.',   's': '...', 	 't': '-',
    'u': '..-',  	'v': '...-',  'w': '.--', 	 'x': '-..-',
    'y': '-.--', 	'z': '--..',  ' ': '/',	
    '1': '.----', 	'2': '..---', '3': '...--',  '4': '....-', 
    '5': '.....', 	'6': '-....', '7': '--...',  '8': '---..', 
	'9': '----.', 	'0': '-----'};

var messageConverted = [];

	message2.split("").map(function (word) {
		word.split("  ").map(function (letter) {
			messageConverted.push(alphabet[letter]);
    });
});
 
	document.getElementById("output_area").innerHTML = messageConverted.join(" ");
	document.getElementById("output_area").style.opacity= "0" ;
}