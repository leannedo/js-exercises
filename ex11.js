//convert temperature from and to celcius and farenheit

function convertTemp(temp, unit) {
     return unit === "f" ? temp = (temp - 32) * 5/9 : temp = (temp * 9/5) + 32
}
console.log(convertTemp(600,"c"));