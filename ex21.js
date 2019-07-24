//return formatted strings

function returnString(str) {
    let str1 = "Py";
    return (str.includes(str1)) ? str.substr(2) : str1 + str;
}
console.log(returnString("house"));