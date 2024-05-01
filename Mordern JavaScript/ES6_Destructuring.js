
// ES6 Destructuring :

//let user = {
//    id: 365,
//    name: "fardin",
//   age: 35
//};
// Object theke nam take ber kore ene akrakta variable e assign korte chai jeno onno jaygay use korte pari.

//let {name: title} = user;
//console.log(title); // Output: fardin





// Nasted Object :
let user = {
  id: 365,
  name: "fardin",
  age: 35,
  //education :{
  //  degree : "Masters",
  //},
};

let {education : {degree} = {} } = user ;  

// let {education : {degree} = {} } = user;
//When you set the default value then you can see umdefined in the instruction and not the error.
console.log(degree);