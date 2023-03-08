//Function to generate secure password
function generatePassword() {
  //Get values from user input
  var longueur = document.getElementById("rangeLength").value;
  var majuscules = document.getElementById("checkUppercase").checked;
  var minuscules = document.getElementById("checkLowercase").checked;
  var chiffres = document.getElementById("checkNumbers").checked;
  var caracteres = document.getElementById("checkSymbol").checked;
  var password = "";
  var caracterePossible = "";
  //If user doesn't select any parameters, we alert him
  if (
    majuscules === false &&
    minuscules === false &&
    chiffres === false &&
    caracteres === false
  ) {
    alert("Choose one parameters to generate password please !");
  } else {
    if (majuscules === true) {
      caracterePossible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (minuscules === true) {
      caracterePossible += "abcdefghijklmnopqrstuvwxyz";
    }
    if (chiffres === true) {
      caracterePossible += "0123456789";
    }
    if (caracteres === true) {
      caracterePossible += "!@#$%/";
    }
    //Generate password
    for (var i = 0; i < longueur; i++) {
      password += caracterePossible.charAt(
        Math.floor(Math.random() * caracterePossible.length)
      );
    }
    //If user select symbol, we check if password contains symbol or we generate a new password
    if (caracteres === true) {
      while (password.match(/[^a-zA-Z0-9]/) === null) {
        password = "";
        for (var i = 0; i < longueur; i++) {
          password += caracterePossible.charAt(
            Math.floor(Math.random() * caracterePossible.length)
          );
        }
      }
    }
    //On affiche le mot de passe
    document.getElementById("generatedPassword").value = password;
  }
}

// Function to copy password
function copyPass() {
  const copyText = document.getElementById("generatedPassword");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copy password: " + copyText.value);
  console.log("Copy password ! ");
}
