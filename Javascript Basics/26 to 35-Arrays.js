

//ARRAYS ARE MUTABLE

let blackPinkMembers=["Lisa","Rose","Jennie","Jisoo"];
let ages=[23,22,21,25];
let mixed=[23,22,21,25,"string",null,undefined];

console.log(blackPinkMembers);
console.log(ages);
console.log(blackPinkMembers[2]);

let obj = {}; // object literal

console.log(typeof blackPinkMembers);
console.log(typeof obj);
console.log(Array.isArray(blackPinkMembers));
console.log(Array.isArray(obj));


// ARRAY PUSH AND POP

// ARRAY SHIFT AND UNSHIFT 

// push -put at the end
blackPinkMembers.push("Yashshree");
console.log(blackPinkMembers);

// pop - pop from the end
let poppedFruit = blackPinkMembers.pop();
console.log(blackPinkMembers);
console.log("popped blackPinkMembers is", poppedFruit);

// unshift - put at the start
blackPinkMembers.unshift("Yashshree");
console.log(blackPinkMembers);

// shift -pop from start
let removedFruit = blackPinkMembers.shift();
console.log(blackPinkMembers);
console.log("removed blackPinkMembers is ", removedFruit);



// PRIMITIVE AND REFERENCE TYPE


//PRimitive types example

let num1 = 26;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1")
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);


// reference types 
// array 

let HybeLabelsMembers = blackPinkMembers;
console.log("blackPinkMembers", blackPinkMembers);
console.log("HybeLabelsMembers", HybeLabelsMembers);
blackPinkMembers.push("Yashshree");
console.log("after pushing element to blackPinkMembers Array");
console.log("blackPinkMembers", blackPinkMembers);
console.log("HybeLabelsMembers", HybeLabelsMembers);





//CLONING AND CONCATENING



let newGroup = blackPinkMembers.slice(0).concat(["Yashshree"]);
let array3 = [].concat(blackPinkMembers,["5", "6"]);
console.log(array3)
 
// spread operator
let oneMoreGroup = ["A", "B"]
let debutedGroup = [...blackPinkMembers, ...oneMoreGroup];
console.log(debutedGroup)
blackPinkMembers.push("Priyanka");
console.log(blackPinkMembers)

console.log(blackPinkMembers===newGroup);



//LOOPING IN ARRAY



//for loop in array
const bp=[];
let i=0;
//for of loop
for(let member of blackPinkMembers)
{
    console.log(member);
}

//for normal
for(let i=0;i<blackPinkMembers.length;i++)
{
    bp.push(blackPinkMembers[i].toUpperCase());
}
console.log(bp);

//for in loop
for(let member in blackPinkMembers)
{
    console.log(blackPinkMembers[member]);
}


//while loop
while(i<blackPinkMembers.length)
{
    console.log(blackPinkMembers[i]);
    i++;
}


//ARRAY DESTRUCTURING
// let member1=blackPinkMembers[0];
// let member2=blackPinkMembers[1];

let [member1,member2,...newArray]=blackPinkMembers;
//the first element will go to member1
//the second element will go to member2
//rest all elements would go to newArray


console.log(member1);
console.log(member2);
