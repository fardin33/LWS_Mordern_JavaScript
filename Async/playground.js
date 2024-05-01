// imports And Exports.

//1. if you want,then you can import and export object, variable,array,string,function anything.you can export.
// import {pi,a} from './External.js'; //name import <--

// console.log(pi,a);




//2. if you to import all kind of thibk in the external file,then you should do that :
// import * as test from "./External.js" // name import <--

// console.log(test.a,pi);




//3. Another Example : 
// import {a as letA, pi as letPi} from "./External.js" // named import <--

// console.log(letA,letPi);



// 4.a: Default import and Export :
// import External from './External.js';

// console.log(External);




//4.b: If i want import default import with another real variable then :
// import External, {pi} from './External.js';

// console.log(External,pi);




// function import:
// Now ,If I want to Import any function then let's see what will be happens. 

import External, {pi, myfunc} from './External.js';

console.log(External,pi);
myfunc();