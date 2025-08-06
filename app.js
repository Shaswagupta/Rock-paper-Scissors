let userScore=0; 
let compScore=0;

const choices = document.querySelectorAll(".choice");
const mgs = document.querySelector("#mgs");
const userScorePara =document.querySelector("#your-score");
const compScorePara =document.querySelector("#comp-score");

 const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        mgs.innerText = `Congrats.. you Win!.. your ${userChoice} beats ${compChoice}`;
        mgs.style.backgroundColor = "green"
    }else{
        compScore++;
        mgs.innerText = `Oops..you lose.. ${compChoice} beats you ${userChoice} `;
        mgs.style.backgroundColor = "red"
        compScorePara.innerText = compScore;
    }
 }
const genCompChoice = () => {
    const option = ["rock" , "paper", "Scissors"];
     const randIdx = Math.floor(Math.random( )*3) 
     return option[randIdx] 

    
 }
 const gameDrow = () => {
    console.log("game was drow. ");
    mgs.innerText = "Oo..No It's Drow_let's try again   ";
    mgs.style.backgroundColor = "#081b31"

 }
const playGame = (userChoice) => {
   console.log("User choice = " ,userChoice);
   const compChoice = genCompChoice();
   console.log("Comp choice = " ,compChoice);

   if(userChoice === compChoice){
     gameDrow();
     
   }else{
    let userWin = true;
     if (userChoice === "rock " ){
        userChoice = compChoice === "paper"?false: true;
     }else if(userChoice === "paper " ){
        userChoice = compChoice === "Scissors"?false: true;
     }
     else{
        userWin = compChoice === "rock"?false: true;
     }
     showWinner(userWin,userChoice,compChoice);   
   }
}


choices.forEach((choice) => {
    console.log(choice); 
    
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked",userChoice );
        playGame(userChoice )
    })
})
    
