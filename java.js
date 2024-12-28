
function lab1(){
    let year = prompt("Enter the year:");

year = parseInt(year);

function isLeapYear(year){
    if((year % 4 == 0 && year % 100 !==0 ) || year % 400 == 0 ){
        return true;
    } else {
        return false;
    }
}

if (!isNaN(year)){
    if (isLeapYear(year)){
        alert(year + ' is a leap year.');
    } else {
        alert(year + ' is not leap year.');
    }
}else {
    alert(year + ' is an invalid year')
}

}


function lab2(){
    
    let myColor = ["Read", "Green", "White", "Black"];
    let result = "";

    for (let i = 0; i < myColor.length; i++){
        result += myColor[i];
        if(i<myColor.length - 1){
            result += ",";
        }
    }

    alert (result);
}

function lab3(){


    const now = new Date();
    const hour = now.getHours();

    if(hour >= 0 && hour < 12){
      alert("Good Morning,\n it's " + now);
    } else if (hour >= 12 && hour < 18){
        alert("Good Afternoon,\n it's " + now);
    }else {
        alert("Good Evening, \n it's " + now);
    }
}


function encrypt() {
    const plainText = document.getElementById("encryptPlainText").value;
    const shift = parseInt(document.getElementById("encryptShift").value);
    let cipherText = '';

    for (let i = 0; i < plainText.length; i++) {
        let char = plainText.charAt(i);
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let base = (char >= 'a') ? 97 : 65; // ASCII for 'a' and 'A'
            char = String.fromCharCode(((code - base + shift) % 26) + base);
        }
        cipherText += char;
    }

    document.getElementById("encryptCipherText").textContent = cipherText;
}

function decrypt() {
    const cipherText = document.getElementById("decryptCipherText").value;
    const shift = parseInt(document.getElementById("decryptShift").value);
    let plainText = '';

    for (let i = 0; i < cipherText.length; i++) {
        let char = cipherText.charAt(i);
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let base = (char >= 'a') ? 97 : 65; // ASCII for 'a' and 'A'
            char = String.fromCharCode(((code - base - shift + 26) % 26) + base);
        }
        plainText += char;
    }

    document.getElementById("decryptPlainText").textContent = plainText;
}