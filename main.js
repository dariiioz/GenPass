function showRangeValue(value){
     document.getElementById("rangeValue").innerText= `${value}`;
     return console.log(value);
}

function genPass(){
    var numbers = "0123456789";
    var string = "abcdefghijklmnpqrstuvwxyz";
    var symbols = "#!+=%";
    var upper = "AZERTYUIPQSDFGHJKLMWXCVBN";
    const passLength = document.getElementById('rangeLength').value;
    const ifuppercase = document.querySelector('#checkUppercase');
    const ifnumbers = document.querySelector('#checkNumbers');
    const ifsymbols = document.querySelector('#checkSymbol');

    if(ifnumbers.checked == true){
        string = string + numbers;
        console.log(string);
    }else{
        if(ifsymbols.checked == true){
            string = string + symbols;
        }else{
            if(ifuppercase.checked == true){
                string = string + upper;
            }
        }
    }
    document.getElementById('generatedPassword').innerText = `${string}`;
    return console.log('OK');

   

    
}