//FUNCTIONS ARE FIRST CLASS CITIZEN

// FUNCTION DECLARATION

function singHappyBirthday(){
    console.log("happy birthday to you ......");
}

function sumTwoNumbers(number1, number2){
    return number1 + number2 ;
}

const returnedValue=sumTwoNumbers(1,2);
console.log(returnedValue);

function isOdd(number){
    return number % 2 != 0;
}

console.log(isOdd(3));


function firstChar(anyString){
    return anyString[0];
}

console.log(firstChar("yashshree"));


//FUNCTION EXPRESSION
const firstChar1=function(anyString)
{
    return anyString[0];
}

//ARROW FUNCTIONS--Behave like variables ,mostly used for functions with samll body


const singHappyBirthday1 = () => {
    console.log("happy birthday to you ......");
}

singHappyBirthday1();

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans = sumThreeNumbers(2,3,4);
console.log(ans);


const isEven = number /*(PARAMETER)*/=> /*(NO NEED OF RETURN KEYWORD )*/number % 2 === 0;


console.log(isEven(4));

const firstChar2 = anyString => anyString[0];

console.log(firstChar2("YASHSHREE"));


//HOISTING

hello();

function hello(){
    console.log("hello world");
}
//Normal func can be hoisted but not function expressions

//var can be hoisted but let and const cannot be hoisted


//FUNCTION INSIDE FUNCTION

function app(){
    const myFunc = () =>{
        console.log("hello from myFunc")
    }
    
    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }

    const mul = (num1, num2) => num1* num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}
app();



//LEXICAL SCOPE
 
const myVar = "value1";

function myApp(){
    

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();


//BLOCK SCOPE AND FUNCTION SCOPE

// let and const are block scope(let and const are stored in seperate memory)
// var is function scope (GLOBAL)


//DEFAULT PARAMETERS

function addTwo(a,b=0){
    return a+b;
}

const answer = addTwo(2);
console.log(answer);

//REST PARAMETERS---good when we dont know the number of exact parameters while defining can give at runtime

// rest parameters 

function myFunc(a,b,...c)                   
{
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c);
}

myFunc(3,4,5,6,7,8,9);  // output:-a is3 b is 4 c is [5,6,7,8] i.e the rest parameters would get included in c


function addAll(...numbers) //it gives us a array i,e array numbers here
{
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const res = addAll(4,5,4,2,10);
console.log(res);



//PARAM DESTRUCTURING
// object 
// react 

const person = {
    firstName: "Yashshree",
    gender: "Female",
    age: 22
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);


//CALLBACK FUNCTION
const myName=()=>
{
    return "Hello";
}
const greeting = (sayHi,fname)=>
{
    console.log(sayHi()+" "+fname);
}

greeting(myName,"Yashshree");

//FUNCTION RETURNING FUNCTION

function a()
{
    return function b()
    {
        console.log("Thank you!!");
    }
}

a()();
const c=a();
c();


// important array methods 

const numbers = [11,12,13,14];

function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`);
}

numbers.forEach(myFunc);            //when we passs a function in forEach loop it automatically takes the value and index
//we can define function in forEach too
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });
// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })
const users = [
    {firstName: "Lisa", age: 23},
    {firstName: "Rose", age: 21},
    {firstName: "Jennie", age: 22},
   
]

users.forEach(function(user){
    console.log(user.firstName);
});

users.forEach((user, index)=>{
    console.log(user.firstName, index);
})



//MAP METHOD
const arr=[5,1,3,2,6];
function double(x)
{
    return x*2;
}

const output=arr.map(double);
console.log(output);

const output1=arr.map((number,index)=>{
    return number*index;
})

console.log(output1);

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);

//FILTER METHOD-ITS CALLBACK SHOULD ALWAYS RETURN BOOLEAN VALUE

function isOdd(x)
{
    return x%2!=0;
}

const result=arr.filter(isOdd);

console.log(result);


//REDUCE METHOD

const output2=arr.reduce(function(accumulator,currentValue)
{
    accumulator=accumulator+currentValue;
    return accumulator;
},10);
console.log(output2);



//SORT METHOD:-Treats elements as strings and sort according to ascii values

// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)

// ["5", "9", "1210", "410", "3000"] 
// [53, 57, 49, 52, 51]

// const userNames = ['e','c','d'];
// userNames.sort();
// console.log(userNames);

// const numbers = [5,9,1200, 410, 3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);

// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 

const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
});

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});



users.sort((a,b)=>{
    if(a.firstName > b.firstName){
        return 1;
    }else{
        return -1;
    }
});

console.log(users);


//FIND METHOD
 const myArray = ["India","Gujarat","Kerala","Goa"];

function isLength3(string){
    return string.length === 3;
}
const fo=myArray.find(isLength3);
console.log(fo)

const findOutput = myArray.find((string)=>string.length===3);
console.log(findOutput); //goa
const users1 = [
    {userId : 1, userName: "hi"},
    {userId : 2, userName: "bye"},
    {userId : 3, userName: "sorry"},
   
];

const myUser = users1.find((user)=>user.userId===3);
console.log(myUser); //  {userId : 3, userName: "sorry"},


//EVERY METHOD
// every method
// const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const answer1=userCart.every((userItem)=>{
userItem.price>30000;
})
console.log(answer1);


// some method -->similar like every() returns boolean

// const numbers = [3,5,11,9];

// even if one number is even
// true 

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);


const someOutput = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(someOutput);

// FILL METHOD


const fillArray = [1,2,3,4,5,6,7,8];

fillArray.fill(0,2,5);

console.log(fillArray);



//SPLICE METHOD

// splice(start , delete , insert )------------->syntax

const spliceArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
const deletedItem = spliceArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(spliceArray);

// ITERATABLES

// whom we can loop
// string , array are iterable 

// const firstName = "Yashshree";
// for(let char of firstName){
//     console.log(char);
// }

const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }

// array like object 
// length property
// whom we can access through index
// example :- string 

// const firstName = "Yashshree";
// console.log(firstName.length);
// console.log(firstName[2]);


