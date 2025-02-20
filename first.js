let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const user_ScorePara=document.querySelector("#user-score");
const comp_ScorePara=document.querySelector("#comp-score");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
//   console.log("game was draw");
  msg.innerText= "Game was Draw";
  msg.style.backgroundColor="yellow";
};

const showWinner =(userWin, userChoice, compChoice) =>{
if(userWin){
    // console.log("You win");
    userScore++;
    user_ScorePara.innerText=userScore;
    msg.innerText= `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}else{
    // console.log("You Lose");
    compScore++;
    comp_ScorePara.innerText=compScore;
   
    msg.innerText= `You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="Red";
}
}

const playGame = (userChoice) => {
//   console.log("User choice is =", userChoice);
  // Generate computer choice-> modular way of programmibg means one function is for one work
  const compChoice = genCompChoice();
//   console.log("Comp choice is", compChoice);

  if (userChoice === compChoice) {
    drawGame(); // Draw condition
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // paper,rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice was clicked",userChoice);
    playGame(userChoice);
  });
});
