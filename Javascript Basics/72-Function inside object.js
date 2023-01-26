
// function inside object is called as method


//here "this" takes the value from the object which is calling it
function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "Lisa",
    age: 21,
    about: personInfo
}
const person2 = {
    firstName : "Jennie",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "Rose",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();