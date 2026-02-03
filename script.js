



function RandomPasswordGeneration(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) {

    let UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    let NUMBERS = "123456789"
    let SYMBOLS = "!@#$%^&*()_+=-";
    let charSet = "";
    let password = "";
    includeUpperCase.checked ? charSet += UPPERCASE : "";
    includeLowerCase.checked ? charSet += LOWERCASE : "";
    includeNumbers.checked ? charSet += NUMBERS : "";
    includeSymbols.checked ? charSet += SYMBOLS : "";

    for (let i = 0; i < passwordLength; i++) {

        let randomNumber = Math.floor(Math.random() * charSet.length);
        password += charSet[randomNumber];
    }
    return (password);
}



const generatePasswordBtn = document.getElementById("generatePasswordBtn");
generatePasswordBtn.onclick = function () {

    const passwordLength = document.getElementById("passwordLength").value;


    if (passwordLength < 1 || passwordLength > 30) {
        alert("Length should not exceed 1 - 30");
        return;
    }

    const includeUppercase = document.getElementById("includeUppercase");
    const includeLowercase = document.getElementById("includeLowercase");
    const includeNumbers = document.getElementById("includeNumbers");
    const includeSymbols = document.getElementById("includeSymbols");

    let tempSave = RandomPasswordGeneration(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
    document.getElementById("generatedPassword").value = `${tempSave}`;
}