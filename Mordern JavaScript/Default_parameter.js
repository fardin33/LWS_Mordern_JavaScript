
//  function default parameter value :

function myfunc(x = 10) {  // akhane 10 ke default value hishebe deya hoyeche- tobe jodi kono value asign kora hoy shetai hobe main value
    return x;
} 

console.log(myfunc(5)); //akhane 5 deya ache bole she 5 show korche but jodi undefind deya hoto tobe,upore j 10 deya hoyeche default value shetai show korto
// console.log(myfunc(undefind)) ; // If someone wants to see what will happen to the answer then remove the comment and try. 