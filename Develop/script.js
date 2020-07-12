// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  let complexity =document.getElementById("slider").value;
  let password = "";
  let passwordText = document.querySelector("#password");
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!?/&%$#@";
  passwordText.value = password;
  for(var i = 0; i<= complexity; i++) {
    password = password + values[Math.floor(Math.random() * values.length)]
  }

  document.getElementById("password").value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
