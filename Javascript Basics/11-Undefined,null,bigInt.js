// undefined 
// null

let bandName;
console.log(typeof bandName);
bandName = "BTS";
console.log(typeof bandName, bandName);

let thingsTheyCantDo = null;
console.log(thingsTheyCantDo);
thingsTheyCantDo = "NOTHING";
console.log(thingsTheyCantDo, typeof thingsTheyCantDo);
console.log(typeof null);


//bigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber+ sameMyNumber);
