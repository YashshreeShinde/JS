const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secondsElement= document.getElementById("seconds");

const newYears = "1 Jan 2023";
function countdown() {
    const newYearsDate = new Date(newYears);
    console.log(newYearsDate);

    const currentDate = new Date();
    console.log(currentDate);

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    console.log(totalSeconds);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days);
    console.log(hours);
    console.log(mins);
    console.log(seconds);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minsElement.innerHTML = mins;
    secondsElement.innerHTML = seconds;
}

//we can have this function if we want to add 0 in front of 0 when time is 0
//0->00
// function formatTime(time) 
// {
//     return time < 10 ? `0${time}` : time;
// }
//use that function in this way
// daysElement.innerHTML = days;
//     hoursElement.innerHTML = hours;
//     minsElement.innerHTML = mins;
//     secondsElement.innerHTML = seconds;

// initial call
countdown();

//call countdown after every 1000 i.e 1 second
setInterval(countdown, 1000);