
// reduce er kaj hocche prvious value er satha current value add kore and finnaly total array er moddhe count kore tar output ber kore dey.
// Array.Prototype.reduce()

let Numbers = [1,2,3,4,5];

let sum = Numbers.reduce((previousvalue,currentvalue) => {
   return previousvalue + currentvalue;
},0);

console.log(sum);