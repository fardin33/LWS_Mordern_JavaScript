//  Array.prototype.filter() :
// Condition er theke boro array er moddhe jei numbergula ache oigulake show koro:

let Numbers = [1,2,3,4,5,6,7,8,9,10];
let result = Numbers.filter((currentvalue,index,arr) => {
//    console.log(index);
//    console.log(arr);
    return currentvalue > 4;
});

console.log(Numbers)
console.log(result);