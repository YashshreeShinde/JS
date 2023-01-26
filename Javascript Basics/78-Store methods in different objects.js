
// we store methods in seperate object so that we dont need to create/allocate memory for functions instead we
//just pass the reference to functions object
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('A', 'D', 'a@gmail.com', 21, "my address");
const user2 = createUser('B', 'E', 'b@gmail.com', 22, "my address");
const user3 = createUser('C', 'F', 'c@gmail.com', 23, "my address");
console.log(user1.about());
console.log(user3.about());