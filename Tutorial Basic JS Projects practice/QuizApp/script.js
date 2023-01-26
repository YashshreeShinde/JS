//Extra functionality added:-On clicking submit,Doesn't allow user to go to next question without selecting a option,also shows a alert. 


const quizData = [
    {
        question: "	The ratio of width of our National flag to its length is",
        a: "3.5",
        b: "4.5",
        c: "2.3",
        d: "3:4",
        correct: "d"
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    }
];



let currentQuestion=0;

const a_option=document.getElementById("a_option")
const b_option=document.getElementById("b_option")
const c_option=document.getElementById("c_option")
const d_option=document.getElementById("d_option")
const questionElement=document.getElementById("question")
const button=document.getElementById("submit")


function deSelectOptions()
{
    const answerElements=document.querySelectorAll(".answer");
// console.log("hi")
    answerElements.forEach(answerElement=>{
        if(answerElement.checked)
        {
            answerElement.checked=false;
            
        }
    })
  

}
loadQuiz();


function loadQuiz()
{
    deSelectOptions();
    const questionData=quizData[currentQuestion];
    const questionText=questionData .question;
    questionElement.innerHTML=questionText;
    a_option.innerHTML=questionData.a;
    b_option.innerHTML=questionData.b;
    c_option.innerHTML=questionData.c;
    d_option.innerHTML=questionData.d;
    
    
}
let score=0;



function isSelected()
{
    let answer=0;
    const answerElements=document.querySelectorAll(".answer");
// console.log("hi")
    answerElements.forEach(answerElement=>{
        if(answerElement.checked)
        {
            answer=answerElement.id;
            console.log(answer)
            
        }
      
    });
    return answer;
}

button.addEventListener('click',()=>{
 
    let selectedOption=isSelected(); 
    // console.log(selectedOption)

    const questionData=quizData[currentQuestion];
    console.log(questionData);
   if(selectedOption)
   {
    if(selectedOption===questionData.correct)
    {
        score++;
        console.log(score)
    }
   }
    currentQuestion++;
    if(currentQuestion<quizData.length && selectedOption)
    { 
        loadQuiz();
        
    }
    else if(!selectedOption)        //If we have not selected the option then dont allow  the user to go to next question,show a alert
    {
        alert("Please select a option !!");
    }
    else
    {
        quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        
        <button onclick="location.reload()">Reload</button>`;
    }
}) 


