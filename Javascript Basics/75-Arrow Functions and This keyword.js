// arrow functions 

//arrow function dont have its own this,it always derive its value from surrounding(it takes value one value upper)
const user1 = {
    firstName : "Yashshree",
    age: 22,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

//even when calling arrow function we cant change value of "this".

user1.about(user1);      //output:-undefined undefined