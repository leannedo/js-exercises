//this is the change i wanna make //////

myArray1 = [30, 110, 50];
myArray2 = [30, 20, 10];

const compareNumber = array => {
    return array.every(
        function(i) {
        return (i < 100);
    })
};
console.log(compareNumber(myArray1));

const WINDOW_WIDTH = 10;


const myFunction = function(string) {
    return string + 'Hello';
}

const arrowFunction = (string, anotherStr) => {
    if (anotherStr) {
        return string + anotherStr;
    }
}

console.log(arrowFunction('Ngoc', 'Meo'))


let car  = {
    name: 'Volvo'
}

class Car {
    constructor(carName) {
        this.name = carName;
    }
    

    hello() {
        console.log('Hello, I am ' + this.name + '.');
    }
}

class SuperCar extends Car {
    constructor(carName, age) {
        super(carName);
        this.age = age
        this.carSpeed = 200;
    }

    get age() {
        return this.age;
    }

    set age(newAge) {
        if (newAge > 50) {
            this.age = newAge
        } else {
            console.log('Invalid age');
        }
    }
}


class Person {
    constructor(name) {
      this._name = name;
    }

  
    set name(newName) { 
        if (newName.length > 5) {
            this._name = newName; 
        }
        else {
            console.log('Error')
        }
        // validation could be checked here such as only allowing non numerical values
    }
  
    walk() {
      console.log(this._name + ' is walking.');
    }
  }
           
  let bob = new Person('Bob');
  console.log(bob.name); 

  bob.name = 'Elsaaa'

  console.log(bob.name)

  /////Meo's part/////////////////////////////
//////////////////////////////////////////////////////////////////////////

  const addNumber = function(number) {
      return number + number;
  };

  function multiplyNumber(number) {
      return number * 2;
  };

  console.log(addNumber(5));
  console.log(multiplyNumber(5));

const subtractNumber = number => number - 5;
const changeNumber = (num1, num2) => num1 - num2;

console.log(subtractNumber(10));
console.log(changeNumber(5,2));

const printFive = _ => 5;

console.log(printFive());

const washDishes = (str) => {
    if (str === 'dirty') {
        return 'wash the dishes';
    }
    else {
        return 'do not wash the dishes';
    }
};

console.log(washDishes('dirty'));

const myDog = _ => ({ name: 'Foggy'}); //object literal

console.log(myDog());

var obj = {
    id: 42,
    counter: function counter() {
      setTimeout(function() {
        console.log(this.id);
      }.bind(this), 1000); //setTimeout(function(){}.bind(this), 1000)
    }
  };

obj.counter();

var myObj = {
    id: 24,
    counter: function counter() {
      setTimeout( () => {
        console.log(this.id);
      }, 1000); //setTimeout( () => {}, 1000)
    }
  };

myObj.counter(); 

var cat = {
    lives: 9,
    jumps: () => {
      this.lives--; //this refers to the context so cat always has 9 lives 
    }
  };

cat.jumps();
cat.jumps();
cat.jumps();

console.log(cat.lives)

//object literal 
let person = {
    firstname: 'leanne',
    surname: 'do',
    greeting: function() {
        return 'hello';
    }
}

console.log(person.greeting());

//------------------------------------------------//
//custom or user-define constructor function//
function Cake(name, flavor) {
    this.name = name;
    this.flavor = flavor;
    this.title = _ => {
        return this.name + ' ' + this.flavor;
    }
}

const bananaCake = new Cake('honeymoon', 'vanilla');
console.log(bananaCake.name);
console.log(bananaCake.title());

//-----------------------------------------------//
//create object by classes------------------------//
class Bread {
    constructor(name, flavor) {
        this.name = name;
        this.flavor = flavor;
    }

    order() { return 'order me'};

}

const bananaBread = new Bread('banana', 'berry');
console.log(bananaBread.order());

//-------------------------------------------------------------//
//class inheritance -------------------------------------------//

class Human {
    constructor(name, age) { 
        this._name = name;
        this._age = age;
    }
    walking() {
        return this._name + ' is walking';
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name(newName) {
        if (newName.length > 3) {
            this._name = newName;
        }
        else {
            this._name = 'MAY';
        }
        
    }
}

let may = new Human('May');
console.log(may.name);
console.log(may.walking());
may.name = 'June';
console.log(may.name);

class Designer extends Human {
    constructor(name, age, ability) {
        super(name, age);
        this.ability = ability;
    }
    canDesign() {
        return this._name + ' can ' + this.ability;
    }
}

let mayDesigner = new Designer('May', 18, 'design');
console.log(mayDesigner.canDesign());
console.log(mayDesigner.walking());

//=======================================================//
//for---op===============================================//
const array = [1, 2, 3, 4];
for (const [i,v] of array.entries()) {
    console.log(v);
    console.log(i);
};


//====================PROMISE=====================================//
let isBakeryOpened = false;

let buyBread = new Promise( //new Promise( function(resolve, reject) {})
    function(resolve, reject) {
        if (isBakeryOpened) {
            let bread = {
                type: 'sourdough',
                price : 6
            };
            resolve(bread);
        } else {
            let reason = new Error('Bakery is closed');
            reject(reason);
        }
    }
);