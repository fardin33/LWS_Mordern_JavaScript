
// ES6 fat Arrow function :

//#1 - Normal function : 
function number1() {
  return 10;
}
console.log(number1());

//#1 - Now I Convert to Arrow function :
let number2 = () => {
  return 10;
}
console.log(number2());




// If there is only one statement Then-! :

//#2 - simple and esay way:
let number3 = () => 20;

console.log(number3());



//#3 - Another Way :
let number4 = () => {
  console.log(30)
};
number4();



// Some Examples :

//#4 - Normal function :
function number5(n) {
  return n;
}
console.log(number5(40));

//#4 - Arrow convert :
let number6 = (n) => 40;

console.log(number6(40));


// Another Example :

//#5-Normal function : 
function number7(a, b) {
  return a + b;
}
console.log(number7(34.5, 34.5));


//#5-Arrow - if The Condition of Arrow function Requires single line Statement Then-! :
let number8 = (a, b) => a + b;

console.log(number8(39.5, 39.5));


// If the condition of the arrow function requires multiple line statements Then-!:
let number9 = (a, b) => {
  return a + b
};

console.log(number9(44.5, 44.5));