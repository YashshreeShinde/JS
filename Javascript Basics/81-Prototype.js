function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object

console.log(hello.name);

// we can add your own properties 
hello.myOwnProperty = "very beautiful";
console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more useful properties.


console.log(hello.prototype); // {} //gives empty object which is known as prototype

// only functions provide prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "light it up like dynamite";
};
console.log(hello.prototype.sing());