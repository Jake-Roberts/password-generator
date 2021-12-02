// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbolChar = ["!", "@", "#", "$", "%", "^", "*", "(", ")"]

//  console.log(lowerCaseChar);
 
function charCode () {
  String.fromCharCode(65)
}

function generatePassword(){
  console.log('hey you clicked the button')
  
  
  
  //1. promt the user for the password criteria 
  //  a. password length 8<128
  var amount = window.prompt("How long would you like your password? Must be more than 8 and less than 128.");
  
  
  
  
  if (amount >= 8 && amount <= 128){
    console.log(amount)
  } else {
    window.alert("please enter a value between 8 and 128");
    generatePassword();
  }
  const randomize = []
  //  b. lowercase, uppercase, numbers, special characters
  var confirmUppercase = window.confirm("Would you like UPPERCASE letters?");
  if (confirmUppercase) {
    for (let i = 0; i < amount; i++){
      const characterUpper = upperCaseChar[Math.floor(Math.random() * amount)]
      randomize.push(characterUpper)
    
      }
  }

  

  var confirmLowercase = window.confirm("Would you like lowercase letters?");
  if (confirmLowercase) {
  for (let i = 0; i < amount; i++){
    const characterLower = lowerCaseChar[Math.floor(Math.random() * amount)]
    randomize.push(characterLower)
  
    }
  }
  var confirmNumbers = window.confirm("Would you like numbers?  .");
  if(confirmNumbers){
  for (let i = 0; i < amount; i++){
    const characterNumber = numberChar[Math.floor(Math.random() * amount)]
    randomize.push(characterNumber)
  
    }
  }
  var confirmSpecial = window.confirm("Would you like special characters?");
  if (confirmSpecial){
  for (let i = 0; i < amount; i++){
    const characterSpecial = symbolChar[Math.floor(Math.random() * amount)]
    randomize.push(characterSpecial)
  
    }
  }
  // let passwordChar = lowerCaseChar
  // if (confirmLowercase) passwordChar= passwordChar.concat(lowerCaseChar)
  // if (confirmUppercase) passwordChar = passwordChar.concat(upperCaseChar)
  // if (confirmNumbers) passwordChar = passwordChar.concat(numberChar)
  // if (confirmSpecial) passwordChar = passwordChar.concat(symbolChar)

  


  console.log(randomize);
  

  //2. Validate the input. 
  //3. Generate password based on criteria.
 
  //4 display password to the page.
  return randomize.join(" ")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



