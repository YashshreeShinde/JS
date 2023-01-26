



//SPREAD OPERATOR

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray1 = [...array1, array2]; //OUTPUT:-[1,2,3,Array(3)] ,the array2 would not come in destructured format it would be a array inside array so use spread operator to spread the elements in new Array
const newArray2=[...array1,...array2]; //[1,2,3,4,5,6]
const newArray3 = [..."ABC"];        //[A,B,C]
console.log(newArray1);

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
  };
  const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
  };
  
  const newObject1 = { ...obj2, ...obj1, key69: "value" };
  const newObject2 = { ...["item1", "item2"] };
  const newObject3 = { ..."abcdefghijklmnopqrstuvwxyz" };     //if we want to assign key to alaphabets like 0:A,1:B,2:C serially 
  console.log(newObject1);
  console.log(newObject2);
  console.log(newObject3);



  //OBJECT DESTRUCTURING

  const band = {
    bandName: "BTS",
    famousSong: "Dynamite",
    year: 2021,
    anotherFamousSong: "Permission to Dance",
  };
  
  let { bandName, famousSong, ...restProps } = band;
  console.log(bandName);
  console.log(restProps);


  //OBJECTS INSIDE ARRAYS

  const users = [
    {userId: 1,firstName: 'Lisa', gender: 'female'},
    {userId: 2,firstName: 'Jennie', gender: 'female'},
    
]
for(let user of users){
    console.log(user.firstName);
}


//NESTED DESTRUCTURING


const[user1,user2]=users;  //it would be stored like user1=(first object of the user's array) ,user2 would store second object
console.log(user1);

//if i dont want whole object but only some values then destructure it
const[{firstName},{gender}]=users;        //it would get the firstname of the first object and gender of second object ,not the entire object
console.log(firstName); //output:-Lisa

// we want to skip one object then simply use [{firstname}, ,{gender}] --it would not take anything from second object and take gender from 3rd object


//if we want to rename the variable names of values then do this:-
const [{firstName: user1firstName, userId}, {gender: user2gender}] = users;
console.log(user1firstName);//Lisa
console.log(userId);//1
console.log(user2gender);//female


