
import { globVar } from "./globVar.js";
import { updateUI } from "./UI.js";

export function showResults(){
  document.getElementById("alertContainer").style.display = "flex";
  document.getElementById("resultAlert").textContent = "The Results:";
  document.getElementById("resultShots").textContent = `Photos Shown: ${globVar.usedGames.length}`;
  document.getElementById("resultCorrect").textContent = `Correct Answers: ${globVar.currectAnswers}`;
  document.getElementById("resultWrong").textContent = `Wrong Answers: ${globVar.wrongAnswers}`;
  document.getElementById("resultPassed").textContent = `Didn't Answer: ${globVar.passed}`;
  document.getElementById("scoreMessage").textContent = `Score: ${globVar.score}`;
  document.getElementById("resetMessage").textContent = "Do you want to reset the game?";
  updateUI(false, false, false, "", 0);
  document.getElementById("messageContainer").style.display = "none";

  if(globVar.score <= 0){
    document.getElementById("alertYesBtn").style.display = "none";
    document.getElementById("alertNoBtn").style.display = "none";
    document.getElementById("resetMessage").style.display = "none";
    document.getElementById("alertOkBtn").style.display = "block";
  } else{
    document.getElementById("alertOkBtn").style.display = "none";
  }
}

export function reset(){
  location.reload();
}

export function resume(){
  document.getElementById("alertContainer").style.display = "none";
  document.getElementById("messageContainer").style.display = "block";

  if(globVar.usedGames.length > (globVar.currectAnswers + globVar.wrongAnswers + globVar.passed)){
    updateUI(false, true, true, "Thanks for continuing the game. Which one is the answer?", 0);
  }
  if(globVar.usedGames.length === (globVar.currectAnswers + globVar.wrongAnswers + globVar.passed)){
    updateUI(true, false, true, "You didn't leave! I appreciate it. Please take the next shot.", 0);
  }
}
