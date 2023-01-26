// objects reference type  arays are good but not sufficient for real world data objects store key value pairs objects don't have index

// how to create objects 


const person = {
    name: "Yashshree",
    age: 22,
    hobbies: ["watching podcast,spending time with family,spirituality,dancing,listening songs"]
}
console.log(person);

// how to access data from objects 
console.log(person["age"]);


// how to add key value pair to objects
person.gender="female";         //DOT NOTATION
person["age"]=23;               //BRACKET NOTATION
console.log(person.age);



//OBJECT ACCESS DIFFERENCE BETWEEN DOT AND BRACKET NOTATION
const key="email";
person[key]="hello@gmail.com";                              //it would add like (using brackets)
                                                            // email:hello@gmail.com
                                                            //also bracket can be used when the key has space in between like "person email"
console.log(person);

//for loop
for(let key in person)
{
    console.log(key); //only keys
}
for(let key in person)
{
    console.log(person[key]);  //values
}


//for key-value pairs
for(let key in person)
{
 console.log(`${key} : ${person[key]}`);
       
}

//Object.keys
console.log(typeof(Object.keys(person)));           //returns array of only keys
const val = Array.isArray((Object.keys(person)));      //type of array is object
console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key] );    //would print values
}







//COMPUTED PROPERTIES

const key1="objkey1";
const key2="objkey2"

const value1="myvalue1";
const value2="myvalue2"

// const obj=
// {
//     key1:value1,                                                //output:-key1:myvalue1
//     key2:value2
// }//we get the values correct not the key



const obj={
    [key1]:value1,
    [key2]:value2
}
console.log(obj);






