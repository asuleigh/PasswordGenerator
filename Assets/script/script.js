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
        var specialChars = confirm("Do you want special characters?");
        var numberChoices = confirm("Do you want numbers?");
        var lowerCaseChoices = confirm("Do you want lower case letters?");
        var upperCaseChoices = confirm("Do you want uppercase letters?");
    }


    //Create empty array and use ifs to append future randomized symbols/numbers/etc into array
    var arr = [];


    if (specialChars) {
        arr.push(symbols);
    }
    if (numberChoices) {
        arr.push(numbers);
    }
    if (lowerCaseChoices) {
        arr.push(lowercase);
    }
    if (upperCaseChoices) {
        arr.push(uppercase);
    }

    var passwordPush = "";

    for (i = 0; i < characterNumber; i++) {
        
        var array = Math.floor(Math.random() * arr.length);

        var setLength = arr[array].length;

        var chooseChars = Math.floor(Math.random() * setLength);

        var randomizedChars = arr[array][chooseChars];

        passwordPush += randomizedChars;
    }
    
    document.getElementById("passwordInput").innerHTML = passwordPush;
}


//Copies generated password to clipboard
function copyToClipboard() {
    var copy = document.getElementById("passwordInput");
    copy.select();
    copy.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Your password: '" + copy.value + "' has been copied to your clipboard!");
}




// PLEASE IGNORE: Old reference code
/* var passwordGen = {
    characterNumber: function () {
        alert("How many characters would you like your password to contain?");
    },
    specialChars: function () {
         alert("Do you want special characters?");
     },
     numbers: function () {
         alert("Do you want numbers?");
     },
    lowerCase: function () {
        alert("Do you want lower case letters?")
     },
     upperCase: function () {
         alert("Do you want uppercase letters?")
     }
 }
 function generate( length = 8 < 128 ){
     var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     var lowercase = 'abcdefghijklmnopqrstuvwxyz';
     var numbers = '0123456789';
     var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
     var all = uppercase + lowercase + numbers + symbols;
     var password = '';
     for (var index = 0; index < length; index++) {
         var character = Math.floor(Math.random() * all.length);
         password += all.substring(character, character + 1);
     }
     return password;
 } */