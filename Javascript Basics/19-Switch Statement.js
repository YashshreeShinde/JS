//similar to if-elseif just the difference is that it stops checking the remaining conditions once we have got the match


let day = 9;
//the output here will be Invalid day as it would go in Default check;
switch(day){
    case 0:
        console.log("Sunday");
        break; 
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}