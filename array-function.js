
//========================================================================//
//array.every()===========================================================//
//array.every(callback_function, context_variable)========================//


myArray1 = [30, 110, 50];
myArray2 = [30, 20, 10];

const compareNumber = array => array.every( i => {return (i < 100);} );
console.log(compareNumber(myArray1));

const checkDataType = (array, dataType) => array.every( i => { return typeof(i) === dataType;}, dataType);

console.log(checkDataType(["hard", "code"], "string"));



//========================until it returns true for at least one element of the array==================//
//array.some(callback_function, context_variable)=============================//



const compareNumber1 = array => array.some( i => {return (i < 100)});

console.log(compareNumber1(myArray1));

const checkDataTyp1 = (array, dataType1) => array.some( i => {return typeof(i) === dataType1}, dataType1);

console.log(checkDataTyp1(["baby", 1, "time"], "number"));



//if you don’t return any value from the callback function, null is returned which will be interpreted as false.//
//========================================================//
//array.filter(callback_function, context_variable)=====//


myNumber = [10, 20, 30, 45];
const filterNumber = num => num.filter( i => { return i % 10 !== 0} );

console.log(filterNumber(myNumber));

//======================================================================//
//array.map(callback_function, context_variable)========================//



const modifyNumber = num => num.map( i => { return i * 2});

console.log(modifyNumber(myNumber));


//======================================================================//
//array.reduce(callback_function, initial_value)========================//


const euros = [29.76, 41.85, 46.5];

const total = euros.reduce( (total, current) => total + current); 

console.log(total);

const avg = euros.reduce( (total, amount, i, array) => {
    total += amount;

    if (i === array.length - 1) {
        return total = total/array.length;
    }
    else {
        return total;
    }
});

console.log(avg);

//======================================================================//
//newArray = array1.concat(array2)========================//

