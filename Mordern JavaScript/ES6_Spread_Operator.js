
// Spread Operator :

let numbers0 = [1,2,3,4,5];

// This Is Not Easy Way :
//let  newNumbers2 = [numbers[0],numbers[1],numbers[2], 4,5,6];

// This Is standard way So Let see :
let  newNumbers = [...numbers0,4,5,6];

console.log(newNumbers);




// New Another Example :
let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9,10];

let numbers = [...numbers1,...numbers2]
console.log(numbers);