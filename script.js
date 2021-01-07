//my variables
var passwordLength;
var passwordNumbers;
var passwordSpecialCharacters;
var passwordLowercase;
var passwordUppercase;


// Assignment Code
var generateBtn = document.querySelector("#generate");

//this is my first prompt
function generatePassword() {
  //prompting my user to choose character length
  passwordLength = parseInt(prompt("How many characters do you want in your password? Please choose between 8 and 128."));

  //if there's no answer and the password length value is incorrect then I will ask for a correct value
  if(!passwordLength || passwordLength < 8 || passwordLength > 128){
    alert("You need to enter a valid value!");

  //then I will ask more questions  
  } else {
    passwordNumbers = confirm("Do you need numbers?");
    passwordSpecialCharacters = confirm("Do you need special characters?");
    passwordLowercase = confirm("Do you need Lowercase letters?");
    passwordUppercase = confirm("Do you need Uppercase letters?");
  }
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
