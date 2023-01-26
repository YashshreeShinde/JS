// new keyword 
// 1.) this = {}
// 2.) return empty object{} 



//create object with new keyword
// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "Permission to dance ";
}


const user1 = new createUser('A', 'D', 'a@gmail.com', 21, "my address");
const user2 = new createUser('B', 'E', 'b@gmail.com', 22, "my address");
const user3 = new createUser('C', 'F', 'c@gmail.com', 23, "my address");
console.log(user1);
console.log(user1.is18());

