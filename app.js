let userScore = 0;
let computerScore = 0;

let userScorePara = document.querySelector("#user");
let computerScorePara = document.querySelector("#comp");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const screen = document.querySelector("body");

const computerChoice = () => {
  const choice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choice[randomIndex];
};

const winner = (userWin, userChoice, CompChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = `You Win 😎 Your ${userChoice} Beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
    screen.style.backgroundColor = "black";
    screen.style.color = "red";
  } else {
    computerScore++;
    computerScorePara.innerHTML = computerScore;
    msg.innerHTML = ` You Lose 😭  ${CompChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    screen.style.backgroundColor = "lightpink";
    screen.style.color = "white"
  }
};

const DrawGame = () => {
  msg.innerHTML = "Game Was Draw 🤪";
  msg.style.backgroundColor = "grey";
};

const gamePlay = (userChoice) => {
  console.log("User Choice = ", userChoice);
  const CompChoice = computerChoice();
  console.log("Computer Choice = ", CompChoice);

  if (userChoice === CompChoice) {
    DrawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      //computerChoice paper,scissors
      userWin = CompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //computerChoice rock,scissors
      userWin = CompChoice === "scissors" ? false : true;
    } else {
      //computerChoice rock,paper
      userWin = CompChoice === "rock" ? false : true;
    }
    winner(userWin, userChoice, CompChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gamePlay(userChoice);
  });
});
