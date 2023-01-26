//always bind otherwise "this" would return global window object
//if you are storing reference always bind and store

const user1 = {
    firstName : "Yashshree",
    age: 22,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// user1.about();
const myFunc = user1.about.bind(user1);
myFunc();
