

function displayDate(date) {

    let today = date.getDay(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayOfWeek = dayName[today],
        formattedHours = '';
        
    if (hours >= 12) {
        hours = hours > 12 ? hours - 12 : hours;
        formattedHours = hours + ' ' + 'PM';
    }
    else if (hours < 12) {
        formattedHours = hours + ' ' + 'AM';
    }
    
    return 'Today is ' + dayOfWeek + '. Current time is ' + formattedHours + ' : ' + minutes + ' : ' + seconds;
}

console.log(displayDate(new Date))
    

