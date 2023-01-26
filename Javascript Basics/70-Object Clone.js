// clone using Object.assign 

 //if we dont want the changes to be reflected in the other object we need to clone.

 //1.We can clone using spread operator
 //2.we can clone using object.assign() method ----------->old way

const obj = {
    key1: "value1",
    key2: "value2"
}
const o=obj;
console.log(obj);
console.log(o);

obj.key3="value3";
//the modification made in obj will be reflected in o also
//obj and o will point to same memeory location




const obj2 = Object.assign({}, obj);
obj.key4 = "value4";
console.log(obj);
console.log(obj2);