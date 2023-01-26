// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser.prototype.sing = function (){
    return "how you like that ";
}

//Added all the functions in the protype of the function so need to create speratae function

const user1 = createUser('A', 'D', 'a@gmail.com', 21, "my address");
const user2 = createUser('B', 'E', 'b@gmail.com', 22, "my address");
const user3 = createUser('C', 'F', 'c@gmail.com', 23, "my address");
console.log(user1);
console.log(user1.is18());