
// Array Destructuring :
// let numbers1 = [1,2,3,4,5];
//let [a,b] = numbers;

// if you want to assign 2 and 6 then What must be done:

//let [,a,,,b] = numbers;
// console.log(a,b);




// Now try in Nasted Array :
// let numbers2 = [1,2,[3,200,500],3,4,5];
//  let [, , [,a,b]] = numbers2;

//console.log(a,b);




// Another Example:
// old Way :
let a = 1;
let b = 2;

let  temp = a;
 a = b;
 b = temp;

console.log(a,b);


//New Destructuring Way:
[b, a] = [a , b];

console.log(a,b);