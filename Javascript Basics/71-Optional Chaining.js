// optional chaining 

const user  = {
    firstName: "Yashshree",
    //  address: {houseNumber: '1234'}
}


console.log(user.address.houseNumber);
//if we comment the address object and try to access the houseNumber then it means
//user.address=undefined
//we are trying to access houseNumber of undefined 
//so it will give error


//if we are working in react or anyother thing 
//suppose the address object is not loaded and it would get loaded after some seconds but we are trying to acess
//it so we dont want that it should give an error ,it should undefined.
//So we use ?, if its present then only access the firstname or any element
//SO use ?.(question mark+dot)
console.log(user?.firstName);
console.log(user?.address?.houseNumber);