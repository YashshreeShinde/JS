// const user1 = {
//     firstName : "Lisa",
//     age: 21,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }


//This both user1 and user2 about() have same meaning just short form
const user2 = {
    firstName : "Rose",
    age: 23,
    about(){
        console.log(this.firstName, this.age);
    }   
}



user1.about();