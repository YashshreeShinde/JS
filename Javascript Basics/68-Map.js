
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
// objects can only have string or symbol as key 
// in maps you can use anything as key like array, number, string 



const person = new Map();
person.set('firstName', 'Yashshree');
person.set('age', 7);
person.set(1,'one');
person.set([1,2,3],'onetwothree');
person.set({1: 'one'},'onetwothree');
console.log(person);
console.log(person.get(1));
for(let key of person.keys()){
    console.log(key, typeof key);
}
for(let [key, value] of person){
    console.log(Array.isArray(key));
    console.log(key, value)
}

const person1 = {
    id: 1,
    firstName: "Lisa"
}
const person2 = {
    id: 2,
    firstName: "Rose"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "Female"});
extraInfo.set(person2, {age: 9, gender: "female"});
console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);