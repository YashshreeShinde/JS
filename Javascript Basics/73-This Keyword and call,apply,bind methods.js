//THIS KEYWORD

console.log(this)//"this" is a window object here
console.log(window);//same output as "this


//this===window   ----------->true
"use strict";
function myFunc(){
    
    console.log(this);
}
myFunc();

//if not used "use strict " then "this" in the myFunc will give output as window object
//with "use strict" ,on calling myFunc() the "this" of myFunc will give output as "undefined"







//CALL,APPLY,BIND

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "Lisa",
    age: 21  
}
const user2 = {
    firstName : "Rose",
    age: 22
    
}

about.call(user2);                  //OUTPUT-->rose 22
//in call method argument we specify that the "this" will hold which object's value
//if not specified the argument of call() method ,it would return undefined


about.call(user2,"guitar","violen");      //OUTPUT-->rose 22 guitar violen  
//we can pass other arguments too in call() method





// APPLY --->internally uses call
//same like call() ,just difference is that instead of seperate arguments we can directly pass a array
about.apply(user1, ["guitar", "bach"]);

//BIND
const func = about.bind(user2, "guitar", "bach");
func();
//it returns a function which can be used later
//func is binded by user1 and following parameters



