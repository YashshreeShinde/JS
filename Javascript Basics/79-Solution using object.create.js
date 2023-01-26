//now everytime we have to give the reference of userMethods functions in createUser function so that to add
//that function in object ,but what if we forgot to add the function reference also so that we can get all the
//function reference ,we use Object.create(userMethods)

//Refer the 80-__proto__ file to understand object.create which includes __proto__


const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'Light it up like a Dynamite Nananana';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('A', 'D', 'a@gmail.com', 21, "my address");
const user2 = createUser('B', 'E', 'b@gmail.com', 22, "my address");
const user3 = createUser('C', 'F', 'c@gmail.com', 23, "my address");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());