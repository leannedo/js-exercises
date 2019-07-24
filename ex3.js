
//display current date in various formats
function getCurrentDate(date) {
    let month = date.getMonth() + 1,
        year = date.getFullYear(),
        day = date.getDate();
    
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return month + '-' + day + '-' + year + ',' + month + '/' + day + '/' + year;

}
console.log(getCurrentDate(new Date))