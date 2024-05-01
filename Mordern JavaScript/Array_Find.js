
// Array.Prototype.find() :
// It will check all the numbers in the Array and return true,,, when it gets true it will not go forward.

let ArrayNumbers = [1,2,3,4,5,6,7,8,9,10];

let result = ArrayNumbers.find(function(currentvalue){
   return currentvalue > 9 ;
});

console.log(result);