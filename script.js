//my variables
var characterAmount;


// Assignment Code
var generateBtn = document.querySelector("#generate");

//this is my first prompt
function generatePassword() {
  //prompting my user to choose character length
  characterAmount = parseInt(prompt("How many characters do you want in your password? Please choose between 8 and 128"));
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
