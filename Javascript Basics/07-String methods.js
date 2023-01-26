// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let surname="   Shinde     "   //length of this string is 14
surname.trim()
console.log(surname.length);      //Output=14

//It would give the same length because strings in JS are immutable (Same concept like Java)
//So store it in another variable

let surname1="   Shinde     "   //length of this string is 14
let trimmedSurname=surname1.trim()
console.log(trimmedSurname.length);  //Output=6

console.log(trimmedSurname.toUpperCase()); 
console.log(trimmedSurname.toLowerCase()); 
console.log(trimmedSurname.slice(3)); //start from 3rd letter in string

