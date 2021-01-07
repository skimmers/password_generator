//my variables
var passwordLength;
var character;


// Assignment Code
var generateBtn = document.querySelector("#generate");

//this is my first prompt
function generatePassword() {
  //prompting my user to choose character length
  passwordLength = parseInt(prompt("How many characters do you want in your password? Please choose between 8 and 128"));

  //setting the first criteria for inputting character length
  if(!passwordLength || passwordLength < 8 || passwordLength > 128){
    alert("You need to enter a valid value!");
  } 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
