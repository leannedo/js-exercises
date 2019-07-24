//which year has the 1st of january falls on sunday 

for (let year = 2014; year <= 2050; year++) {
    let d = new Date(year, 0, 1); //january is 0
    if (d.getDay() === 0) {
        console.log ("1st January is being a Sunday " + year);
    }
}

//loop from 2014 to 2050
//create new date from year, month, day and assign to a new variable
//check if the day from var.getDay() is 0, meaning sunday
//if yes, print that year out
