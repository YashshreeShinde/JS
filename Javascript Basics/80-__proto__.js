const obj1 = {
    key1: "value1",
    key2: "value2"

}

//if we want to do something like if we trying to access suppose key2 from obj2 but its not present in obj2
//so we want to search it in obj1 if not present in obj2

//so to establish this relationship we use Object.create(object which needs to be checked if particular element not found)




const obj2 = Object.create(obj1); // {} 
// there is one more way to create empty object
//it creats proto of obj1 and searches that proto
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__);

