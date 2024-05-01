
// Topic - Rest operator :


// Normal Example :
function Myfunc(a,b){
    console.log(a,b);
}
Myfunc(1,2,3,4,5,6);



// Another Example :  Atake run korle weird akta answer ashe- but niche atake Speard oparator er moto kore rest operator a likhbo tahoela shajano akta output ashbe. 
function Myfun2(){
    console.log(arguments);
}
Myfun2(1,2,3,4,5);



// full And final Rest Operator Example :

function Myfunc3(...params){
    console.log(params);
}
Myfunc3(1,2,3,4,5);


// another example : 

function myfunc4(a,...params1){
    console.log(a);    // akhane ... er age a use kora hoyeche er fole 1 take array er bahire aladababe show korbe r bakigula array er moddhei.
    console.log(params1);
}
myfunc4(1,2,3,4,5);


// Ai ... er rest operator aktar moddhe aktai kora jabe. akadikbar use korte caile error khaba. 