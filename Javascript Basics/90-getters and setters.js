// getter and setters 

//here get and set are keywords are using getter and setter methods

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("Yashshree", "shinde", 22);
console.log(person1.fullName()); //error
console.log(person1.fullName); //treat it like property
person1.fullName = "nimish shinde";
console.log(person1);
