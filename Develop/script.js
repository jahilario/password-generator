var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var characeters = "!@#$%^&*+<>?/;:(=)|{~.,";
var passwordConditions = ["numbers", "lowerCase", "upperCase", "characters"];






// Assignment code here
function generatePassword() {
  var characterPrompt = window.prompt('How many characeters do you want your password to have? Must be at least 8 characters.');



  if (characterPrompt >= 8 && characterPrompt <=128) {
   var lowercaseConfirm = window.confirm('Click OK if you want lowercase characters.');
  }

  else {
    window.alert("Must be at least 8 character and less than 128 characters.");
    generatePassword();
  }

  if (lowercaseConfirm) {
    var eligibleChars = "";
    eligibleChars = eligibleChars + lowerCase;
    var uppercaseConfirm = window.confirm('Click OK if you want uppercase characters.');

  }
  //If user chooses cancel for uppercare


  if (uppercaseConfirm) {
    var numericConfirm = window.confirm('Click OK if you want numeric characters.');
  }
  //If user chooses cancel for numeric


  if (numericConfirm) {
    var specialCharacterConfirm = window.confirm('Click OK if you want special characters.');
  }
  //If user chooses cancel for special

  if (specialCharacterConfirm) {
    window.alert('Enjoy your password!')
  }
}

for(var i=0; i <= generatePassword; i++) {
  password = password + vali
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
