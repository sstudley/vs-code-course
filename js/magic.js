const person = {
  name:         'chris',
  username:     'chrisoncode',
};



console.log(person.name);


let myVar        = `blah ${person.name}`;
const myNumber     = 3;
const myLongString = ' here is the loooooonnnnggg string ';
/**
 * This function does something
 * @param {string} first  My description
 * @param {*string} second Next description
 */
function doSomething(first, second){
    return myVar;
};


doSomething();
console.log(myVar);

myVar = 'something else ';

console.log(myNumber + myLongString + myVar);