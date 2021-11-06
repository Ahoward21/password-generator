// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
// 1. Set variables
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "<", ">", "?", ".", "/", ",", "&", "*", "+", "-", "~"];
var aplhaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// 2. Declare variables
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmLowerCase;
var confirmUpperCase;


// 3. Comfirm how many characters 
function generatePassword() {
  console.log("Button Clicked");
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  //While loop if answer is outside the paramenters
  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8 - 128 characters. Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }

  // 4. Repeat back how many characters the user will have in password
  alert('Your password will have ' + confirmLength + ' characters.');

  // 5. Parameters of password
  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  // 6. Validate input
  while (confirmSpecialCharacter === false && confirmNumericCharacter === false && confirmLowerCase === fasle && confirmUpperCase === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  }

    // 7. Generate password based on parameters 
    var passwordCharacters = []

    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }

    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(aplhaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      var randomPassword = ""

      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      // 8. Display password
      return randomPassword;

  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  // 1.  prompt the user for password criteria 
  //    a. password length 8-128 characters - enusre proper length
  //    b. inlcude uppercase, lowercase, numeric, and/or special characters - set characters
  // 2. validate the input - 
  // 3. generate password based on criteria
  // 4. display generated password on page


