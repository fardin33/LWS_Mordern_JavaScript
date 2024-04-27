
// ES6 fat Arrow function :

// #1 - Normal function :
let javascript_1 = {
    name_1 : "JavaScript_1",
    libraries_1 : ["React.js","Angular.js","Vue.js"],
    printlibraries_1 : function() {  
        let self = this;
        this.libraries.forEach(function(a) {
        console.log(`${self.name_1} Loves ${a}`);
        });
    },
};
javascript_1.printlibraries_1();


// Now We can make easy to write, like Dis Arrow function Way:
//The arrow function is not changing this-
let javascript_2 = {
    name_2 : "JavaScript",
    libraries_2 : ["React.js","Angular.js","Vue.js"],
    printlibraries_2 : function() {  
        this.libraries_2.forEach((b) => console.log(`${this.name_2} loves ${b}`))
    },
};
javascript_2.printlibraries_2();