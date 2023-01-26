
const passWordElement = document.getElementById("pw");
const copyElement = document.getElementById('copy');
const lenElement = document.getElementById('len');
const upperElement = document.getElementById('upper');
const lowerElement = document.getElementById('lower');
const numberElement = document.getElementById('number');
const symbolElement = document.getElementById('symbol');
const generateElement = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnoprstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#~%^$&*';


//Math.ceil is giving error because 
//for eg:- if (math.random()*upperLetters.length)=26.40
//so if we take ceil()then it would be 27 ,whereas there is no 26th letter which would give "undefined"

function getLowerCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getUpperCase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}



function generate(){
    const password = [];
    if(upperElement.checked){
        password.push(getUpperCase());
    }
    if(lowerElement.checked){
        password.push(getLowerCase());
    }
    if(symbolElement.checked){
        password.push(getSymbol());
    }
    if(numberElement.checked){
        password.push(getNumber());
    }

    return password[Math.floor(Math.random() * password.length)];
}
generateElement.addEventListener('click',()=>
{
 
    const len = lenElement.value;
    let password = "";
    
    for(let counter = 0;counter < len;counter++){
        const char = generate();

        password +=  char;
    }
        passWordElement.innerHTML = password;
 
});





