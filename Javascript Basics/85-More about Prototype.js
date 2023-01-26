let numbers = [1,2,3];

console.log(Object.getPrototypeOf(numbers));  //array prototype is array
console.log(Array.prototype);//prototype of array will consist of all the array methods
console.log(numbers);

function hello(){
    console.log("hello world"); //function prototype is a object
}
