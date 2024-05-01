
// Array .prototype.find_index() :

let Numbers = [1,2,3,4,5,6,7,8,9,10];

let result= Numbers.findIndex((currentvalue) => {
   return  currentvalue > 6; 
});

console.log(result);