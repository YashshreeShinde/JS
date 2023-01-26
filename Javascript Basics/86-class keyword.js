
class CreateUser{
    constructor(firstName, lastName, email, age, address){ //this constructor is like a function(refer previous example)
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "Without ME";
    }

}


const user1 = new createUser('A', 'D', 'a@gmail.com', 21, "my address");
const user2 = new createUser('B', 'E', 'b@gmail.com', 22, "my address");
const user3 = new createUser('C', 'F', 'c@gmail.com', 23, "my address");
console.log(Object.getPrototypeOf(user1));
