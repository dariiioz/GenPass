function showRangeValue(value){
     document.getElementById("rangeValue").innerText= `${value}`;
     return console.log(value);
}

function genPass(){
    let numbers = "0123456789";
    let defaultstring = "abcdefghijklmnpqrstuvwxyz";
    let symbols = "@!";
    let upper = "AZERTYUIPQSDFGHJKLMWXCVBN";
    let passLength = document.getElementById('rangeLength').value;
    const ifuppercase = document.querySelector('#checkUppercase');
    const ifnumbers = document.querySelector('#checkNumbers');
    const ifsymbols = document.querySelector('#checkSymbol');
    let password = "";
    let string = defaultstring;
    let array = [ifuppercase, ifnumbers, ifsymbols];
    let i = 0;
    while(i < array.length){
        if(array[i].checked == true){
            value = array[i].value;
            switch(value){
                case 'upper':
                    string = upper + string;
                    break;
                case 'numbers':
                    string = numbers + string;
                    break;
                case 'symbols':
                    string = symbols + string;
                    break;
            }
        }
        i++;
    }
    for (let i2 = 0; i2 < passLength; i2++) {
        password += string[Math.floor(Math.random() * string.length)]
      }
    document.getElementById('generatedPassword').value = `${password}`;
    return console.log(password);
}

function copyPass(){
    const copyText = document.getElementById("generatedPassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copy password: " + copyText.value);
    console.log('Copy password ! ');
}
