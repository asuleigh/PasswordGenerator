//variables to consider for password generation
var symbols = ["!","#", "$", "%", "&", "/", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//function for generating password
function passwordGen() {
    //prompt for password length
    var characterNumber = prompt("How many characters would you like your password to contain?")

    if (characterNumber < 8 || characterNumber > 128) {
        alert("Password must be no shorter than 8 and no longer than 128 characters")
    }

    //prompts for other desired password attributes if initial prompt passes
    else {
        var specialChars
        var numbers
        var lowerCase
        var upperCase
    }


}





// var passwordGen = {

//     characterNumber: function () {
//         alert("How many characters would you like your password to contain?");
//     },

//     specialChars: function () {
//         alert("Do you want special characters?");
//     },

//     numbers: function () {
//         alert("Do you want numbers?");
//     },

//     lowerCase: function () {
//         alert("Do you want lower case letters?")
//     },

//     upperCase: function () {
//         alert("Do you want uppercase letters?")
//     }
// }
// function generate( length = 8 < 128 ){
//     var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var lowercase = 'abcdefghijklmnopqrstuvwxyz';
//     var numbers = '0123456789';
//     var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
//     var all = uppercase + lowercase + numbers + symbols;
//     var password = '';
//     for (var index = 0; index < length; index++) {
//         var character = Math.floor(Math.random() * all.length);
//         password += all.substring(character, character + 1);
//     }
//     return password;
// }