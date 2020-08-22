// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // define arrays
  var lCase = ["q","w","e","r","t","y","u","i","o","p","s","a","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
  
  var uCase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
  
  var nums = ["1","2","3","4","5","6","7","8","9","0"];
  
  var spChars = [" ","!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}","\\","|",":",";","<",">","?",",",".","/","`","~","'","\""];
  
  var finalList = [];
  var password = "";

  // Get length of the password between 8-128
  do {
    pwLength = prompt("How long would you like the password to be (8 - 128");
    console.log(pwLength);
    if (pwLength === null) {
      return "";
    }
  } while (pwLength < 8 || pwLength > 128);


  // Get if they want lowercase letters include
  if (confirm("Do you want to use lower case letters in the password?")) {
    for (i=0; i<lCase.length; i++) {
      finalList.push(lCase[i]);
    }
  }
  
  // do they want upper case characters include
  if (confirm("Do you want to use upper case letters in the password?")) {
    for (i=0; i<uCase.length; i++) {
      finalList.push(uCase[i]);
    }
  }
  
  // do they want numeric characters
  if (confirm("Do you want to use numbers in the password?")) {
    for (i=0; i < nums.length; i++) {
      finalList.push(nums[i]);
    }
  }
  
  // do they want special characters
    if (confirm("Do you want to use special characters in the password?")) {
      for (i=0; i<spChars.length; i++) {
        finalList.push(spChars[i]);
      }
    }

  // randomly select characters from the chosen lists to create the password
  for (i=0; i < pwLength; i++) {
    // get random character
    var cur = Math.floor(Math.random() * finalList.length)
    // add character to the password
    password += finalList[cur];
  }
  
  //return the password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);