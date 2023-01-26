
// function (function create object)
// 1.) add key value pair 
// 2.) Returns object
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}
//creates object and return it----->for resusability purpose 

const user1 = createUser('Yashshree', 'shinde', 'yashshree@gmail.com', 22, "my address");
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);