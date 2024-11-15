import { globVar } from "./globVar.js";
import { showResults } from "./resultsPopUp.js";
import { updateUI } from "./UI.js";

export function submit(){
  const radioElements = document.getElementsByName("gameOption");
  let userAnswer = "";

  // find the user answer

  for( let i = 0; i < radioElements.length; i++){
    if(radioElements[i].checked){
      userAnswer = radioElements.values[i];
      break;
    }
  }

  if(userAnswer === globVar.currentGame.name){
    updateUI(true, false, true, "Well don! the Answer is currect!", 1);
    document.getElementById("messageContainer").style.backgroundColor = "hsl(148, 71%, 65%)";
    globVar.currectAnswers++;
  }

  if(userAnswer === ""){
    updateUI(true, false, true, "Ok! you dont know the answer. Go for the Next Shot.", -1);
    document.getElementById("messageContainer").style.backgroundColor = "hsl(60, 100%, 80%)";
    globVar.passed++;
    }

  if(userAnswer !== globVar.currentGame.name && userAnswer !== ""){
    updateUI(true, false, true, `Wrong! the Answer was ${globVar.currentGame.name}. press Next Shot Button.`, -3);
    document.getElementById("messageContainer").style.backgroundColor = "hsl(0, 64%, 61%)";
    globVar.wrongAnswers++;
  }

  // update the user answer color

  if(globVar.score <= 2){
    updateUI(true, false, true, `the answer was ${globVar.currentGame.name}. if you get zero or negative score, the game will be over!`, 0);
  }

  if(globVar.score <= 1){
    updateUI(true, false, true, `No! it's ${globVar.currentGame.name}!This is your Last chance. try your best or loos the game.`, 0);
  }

  if(globVar.score <= 1 && userAnswer === ""){
    updateUI(true, false, true, `It was ${globVar.currentGame.name}! This is your Last chance. try your best or loos the game.`, 0);
  }

  if(globVar.score <= 0){
    updateUI(false, false, true, "", 0);
    showResults();
    document.getElementById("resultAlert").textContent = "GAME OVER!";
  }
};