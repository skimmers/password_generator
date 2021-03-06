

//created an array including the special characters
specialCharacters = [ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];

//created an array including the alphabet
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//created an array including Uppercase alphabet
upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//created an array of single digit numbers
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Assignment Code
var generateBtn = document.querySelector("#generate");

//this is my first prompt
function generatePassword() {

  //my variables
var passwordLength;
var passwordNumbers;
var passwordSpecialCharacters;
var passwordLowercase;
var passwordUppercase;
var generatedPassword;

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
  };

  //if user cancels all questions, then no password alert pops up
  if (!passwordNumbers && !passwordSpecialCharacters && !passwordLowercase && !passwordUppercase) {
    alert("You don't get a password!");

  //if user answers all questions, then a password is generated
  } else if (passwordNumbers && passwordSpecialCharacters && passwordLowercase && passwordUppercase) {
    generatedPassword = specialCharacters.concat(alphabet, numbers, upperAlphabet);
    console.log(generatedPassword);
  //if user answers for numbers, special characters, and lowercase 
  } else if (passwordNumbers && passwordSpecialCharacters && passwordLowercase) {
    generatedPassword = specialCharacters.concat(alphabet,numbers);
    console.log(generatedPassword);
  //if user answers numbers, special characters, and uppercase
  } else if (passwordNumbers && passwordSpecialCharacters && passwordUppercase) {
    generatedPassword = specialCharacters.concat(numbers, upperAlphabet);
    console.log(generatedPassword);
  //if user answers for numbers, lowercase, and uppercase
  } else if (passwordNumbers && passwordLowercase && passwordUppercase) {
    generatedPassword = numbers.concat(alphabet, upperAlphabet);
    console.log(generatedPassword);
  //if user answers for numbers and lowercase  
  } else if (passwordNumbers && passwordLowercase) {
    generatedPassword = numbers.concat(alphabet);
    console.log(generatedPassword);
  //if user answers for numbers and uppercase
  } else if (passwordNumbers && passwordUppercase) {
    generatedPassword = numbers.concat(upperAlphabet);
    console.log(generatedPassword);
  //if user answers for numbers and special characters
  } else if (passwordNumbers && passwordSpecialCharacters) {
    generatedPassword = numbers.concat(specialCharacters);
    console.log(generatedPassword);
  //if user answers for lowercase and uppercase
  } else if (passwordLowercase && passwordUppercase) {
    generatedPassword = alphabet.concat(upperAlphabet);
    console.log(generatedPassword);
  //if user answers for lowercase and special characters
  } else if (passwordLowercase && passwordSpecialCharacters) {
    generatedPassword = alphabet.concat(specialCharacters);
    console.log(generatedPassword);
  //if user answers for special characters and uppercase
  } else if (passwordSpecialCharacters && passwordUppercase) {
    generatedPassword = specialCharacters.concat(upperAlphabet);
    console.log(generatedPassword);
  //if user only chooses 1 criteria
  } else if (passwordUppercase) {
    generatedPassword = upperAlphabet;
    console.log(generatedPassword);
  } else if (passwordSpecialCharacters) {
    generatedPassword = specialCharacters;
    console.log(generatedPassword);
  } else if (passwordNumbers) {
    generatedPassword = numbers;
    console.log(generatedPassword);
  }else if (passwordLowercase) {
    generatedPassword = alphabet;
    console.log(generatedPassword);
  };

  //an empty variable for the user
  var passwordOutput = [];

  //this is what randomizes the password
  for (var i = 0; i < passwordLength; i++) {
    var userInput = generatedPassword[Math.floor(Math.random() * generatedPassword.length)];
    passwordOutput.push(userInput);
  }
  //this creates and returns a string by concatenating all the elements in the array
  var finalGenPass = passwordOutput.join("");
  UserInput(finalGenPass);
  return(finalGenPass);
};

//this is what connects the password to the textbox
function UserInput(finalGenPass) {
  document.getElementById("password").textContent=finalGenPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
