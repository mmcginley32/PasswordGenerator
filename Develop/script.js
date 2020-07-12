// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var complexity =document.getElementById("slider").value;
  var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!?/&%$#@";
  passwordText.value = password;
  for(var i = 0; i<= complexity; i++) {
    password = password + values.charAt(math.floor(math.random() * math.floor(values.lenth - 1)))
  }

  document.getElementById("generate").value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
