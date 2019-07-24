//leap year or not

function isLeapYear(year) {
    let result = "";
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        result = "leap year"
    }
    else if (year % 4 === 0 && year % 100 != 0) {
        result = "leap year"
    }
    else {
        result = "not leap year"
    }
    return result;
}

console.log(isLeapYear(2400));

function checkLeapYear(year) {
    let result = "";
    return (year % 100 === 0) ? (year % 400 === 0 ) : (year % 4 === 0);
}

function printIsLeapYear(year) {
    return checkLeapYear(year) ? 'leap year' : 'not leap year';
}


console.log(printIsLeapYear(2019))