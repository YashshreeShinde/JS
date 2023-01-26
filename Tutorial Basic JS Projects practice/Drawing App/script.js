const canvas = document.getElementById("canvas");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const sizeElement= document.getElementById("size");
const colorElement = document.getElementById("color");

// const circle=document.getElementById("circle");
// const line=document.getElementById("line");

const clearButton = document.getElementById("clear");
const context = canvas.getContext("2d");

let size = 10;
let isPressed = false;
let color = "blue";
let x = 0;
let y = 0;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = 0;
    y = 0;
});




// We can add both (circle and line) because if we are only taking line then even the little gaps are between slight mouse up and down is visible
canvas.addEventListener("mousemove", (e) => {

    if (isPressed ) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        //x :- x-start
        //y :- y-start
        //x2 :- x-end
        //y2 :- y-end
       
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});
   
function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
}






increaseButton.addEventListener("click", () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }
    console.log(size)

    updateSizeOnScreen();
});

decreaseButton.addEventListener("click", () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }
    console.log(size)

    updateSizeOnScreen();
});

colorElement.addEventListener("change", (e) => {
    color = e.target.value;
});

clearButton.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSizeOnScreen() {
    sizeElement.innerText = size;
}