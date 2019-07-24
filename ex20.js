//check positive and negative integers 

function checkIntegers(num1, num2) {
    return (num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0);
}
console.log(checkIntegers(-5,-1));