// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log('hey you clicked the button')
  //1. promt the user for the password criteria 
  //  a. password length 8<128
  //  b. lowercase, uppercase, numbers, special characters
  //2. Validate the input. 
  //3. Generate password based on criteria.
  var confirmUppercase = window.confirm("Would you like UPPERCASE letters?")
  if (confirmUppercase){

  }; 
  var confirmLowercase = window.confirm("Would you like lowercase letters?");
  var confirmNumbers = window.confirm("Would you like numbers?  .");
  var confirmSpecial = window.confirm("Would you like special characters?")

  //4 display password to the page.
  return "Generated password will go here!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



