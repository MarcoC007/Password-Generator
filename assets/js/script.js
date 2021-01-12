// Assignment Code
var generateBtn = document.querySelector("#generate");
var abcUpperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var abcUpperCaseArr;
var abcLowerCase = ("abcdefghijklmnopqrstuvwxyz");
var numbers = ("01234567890");
var numbersArr;
var symbols = ("~!@#$%^&*()_+`/*-+.|\][{}:;'><,?");
var symbolsArr;
var passwordLength;

// Write password to the #password input
function writePassword() {
    var password = "";
    password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function added to the Length of the password
function determinePassLength() {
     passwordLength = prompt("How many characters Do you need for your password?");
    
    if (passwordLength < 8){
        alert("The password is recomemnded between 8 to 128 characters!!");
        determinePassLength();
    } 
    else if (passwordLength > 128){
        alert("The password is recommended between 8 to 128 character!!");
        determinePassLength();
    }
    else if (isNaN(passwordLength)){
        alert("The password is recommended between 8 to 128 character!!");
        determinePassLength();
    }
    return passwordLength;
  
}

// Function to add Uppercase to the password
function determineUpperCase () {
    abcUpperCaseArr = prompt("Would you like a password with upper case letters? \n(Yes or No)");
    abcUpperCaseArr = abcUpperCaseArr.toLowerCase();
    
    if (abcUpperCaseArr === null || abcUpperCaseArr === ""){
        alert("Yes or No");
        determineUpperCase();
    }
    else if (abcUpperCaseArr === "yes"){
        abcUpperCaseArr = true;
    return abcUpperCaseArr;
}
    else if (abcUpperCaseArr === "no"){
    abcUpperCaseArr = false;
    return abcUpperCaseArr;
    }
    else {
        alert("Please Yes or No");
        determineUpperCase();
    }
    return abcUpperCaseArr;
}

// Function to add Symbols to the password
function determineSymbols () {
    symbolsArr = prompt("Would you like a password with symbols? \n(Yes or No)");
    symbolsArr = symbolsArr.toLowerCase();

    if (symbolsArr === null || symbolsArr === ""){
        alert("Yes or No");
        determineSymbols();
    }
    else if (symbolsArr === "yes"){
        symbolsArr = true;
        return symbolsArr;
    }
    else if (symbolsArr === "no"){
        symbolsArr = false;
        return symbolsArr
    }
    else {
        alert("Please Yes or No");
        determineSymbols();
    }
    return symbolsArr;
}

// Function to add Numbers to the password
function determineNumbers () {
    numbersArr = prompt("Would you like a password with numbers? \n(Yes or No)");
    numbersArr = numbersArr.toLowerCase();

    if (numbersArr === null || numbersArr === ""){
        alert("Yes or No");
        determineNumbers();
    }
    else if (numbersArr === "yes"){
         numbersArr = true;
         return numbersArr;
    }
    else if (numbersArr === "no"){
        numbersArr = false;
        return numbersArr;
    }
    else {
        alert("Please or No");
        determineNumbers();
    }
    return numbersArr;
}


// Function added to generate a random password 
function generatePassword() {
    determinePassLength();
    console.log(passwordLength);
    determineUpperCase();
    console.log(abcUpperCaseArr);
    determineSymbols();
    console.log(symbolsArr);
    determineNumbers();
    console.log(numbersArr);

    var character = abcLowerCase;
    var pwd = "";
    
    if (abcUpperCaseArr && symbolsArr && numbersArr){
        character += abcUpperCaseArr + symbolsArr + numbersArr;
        
    }
    else if (abcUpperCaseArr && symbolsArr){
        character += abcUpperCase + symbols;
    }
    else if (symbolsArr && numbersArr){
        character += symbols + numbers;
    }
    else if (abcUpperCaseArr && numbersArr){
        character += abcUpperCase + numbers;
    }
    else if (abcUpperCaseArr){
        character += abcUpperCase;
    }
    else if (symbolsArr){
        character += symbols;
    }
    else if (numbersArr){
        character += numbers;
    }
    else {
        character === abcLowerCase;
    }

    for (var i = 0; i < passwordLength; i++){
        pwd += character.charAt(Math.floor(Math.random() * character.length));
    }
    return pwd;
}


