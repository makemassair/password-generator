// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

  // prompt for character type - x4 types and set as variable
    // lowercase
    // uppercase
    // numeric
    // special
  // log those numbers
  // pull random numbers from generated arrays based on character types
  // validate entry at each point, by using a for loop

let passwordLength = 0
let passwordString = ""
let generatedPassword = ""

// Function to prompt user for password options
function getPasswordOptions() {
  do {
    passwordLength = prompt(`Please choose your password length by picking a number between 10 and 64.`)
    if (passwordLength === null) {
      return      
    }
    if (passwordLength < 10 || passwordLength > 64) {
      alert(`You must choose a number between 10 and 64.\n\nNo more.\nNo less.`)
    }
    console.log(passwordLength)
  } 
  while (passwordLength < 10 || passwordLength > 64 || passwordLength != parseInt(passwordLength));

  passwordString = ""

  do {
    const typeLowercase = confirm(`Should your password use "lowercase" characters?`)
    const typeUppercase = confirm(`Should your password use "Uppercase" characters?`)
    const typeNumeric = confirm(`Should your password use "Numeric" characters?`)
    const typeSpecial = confirm(`Should your password use "Special" characters ($@%&*, etc)?`)

    if (typeLowercase) {
      passwordString += lowerCasedCharacters.join("") 
      // generating list of lowercase characters
    }
    if (typeUppercase) {
      passwordString += upperCasedCharacters.join("") 
      // generating list of uppercase characters
    }
    if (typeNumeric) {
      passwordString += numericCharacters.join("")
      // generating list of numeric characticers    
    }
    if (typeSpecial) {
      passwordString += specialCharacters.join("")
      // generating list of special characters    
    }
    if (passwordString === "") {
      if (!confirm(`You must pick at least one type of characters to proceed, or click "Cancel" to exit`)) {
       return 
      }
    }
    console.log(`Password length = ` + passwordLength);
    console.log(`Use lowercase characters? ` + typeLowercase);
    console.log(`Use uppercase characters? `+ typeUppercase);
    console.log(`Use numeric characters? `+ typeNumeric);
    console.log(`Use special characters? ` + typeSpecial);
  
  }
  while (passwordString === "");
  console.log(passwordString)
   
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  generatedPassword = ""
  getPasswordOptions()
  for (let i = 0; i < passwordLength; i++) {
    generatedPassword += getRandom(passwordString)
  }
  console.log(generatedPassword)
  return generatedPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);