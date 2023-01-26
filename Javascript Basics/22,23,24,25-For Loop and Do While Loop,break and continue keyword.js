//for loop for printing numbers which are greater than 3
for(let i = 0;i<=9;i++){
    if(i>3)
    console.log(i);
}






// break keywork

// continue keyword 

for(let i = 1; i<=100; i++){
    if(i===50){
        break;
    }
    console.log(i);
}

for(let i = 1; i<=100; i++){
    if(i===99){
        continue;
    }
    console.log(i);
}



// do while loop

let i = 100;
do{
    console.log(i);
    i++;
}while(i<=90);

