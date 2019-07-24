
function testNumber(num) {
    return Math.abs(100 - num) >= 20 || Math.abs(400 - num) >= 20;
}

console.log(testNumber(90));