import { globVar } from "./globVar.js";
import { updateUI} from "./UI.js";

// Next Shot Button Functionality

export function nextShot(){

  // change the UI
  document.getElementById("nextShotBtn").textContent = "Next Shot";
  document.getElementById("resetBtn").style.display = "block";
  document.getElementById("submitBtn").style.display = "block";
  document.getElementById("messageContainer").style.backgroundColor = "";

  // display the Messages

  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("screenShot").style.display = "block";

  /* getting a random screen shot */

  // random game

  let randomIndex;

  do{
    randomIndex = Math.floor(Math.random() * gamesArray.length);
  }
  while(globVar.usedGames.includes(gamesArray[randomIndex]));

  // pusing current game to used game

  globVar.currentGame = gamesArray[randomIndex];
  globVar.usedGames.push(globVar.currentGame);

  // showing the screen shot

  const img = document.getElementById("screenShot");
  img.src = globVar.currentGame.src;

  /* set the options */

  // display the radio buttons

  document.getElementById("options").style.display = "flex";

  const gameOptions = [globVar.currentGame.name];

  // generate the random options

  while(gameOptions.length < globVar.radioElements.length){
    const randomGame = gamesArray[Math.floor(Math.random() * gamesArray.length)].name;
    if(!gameOptions.includes(randomGame)){
      gameOptions.push(randomGame);
    }
  }

  // Shuffle Game options

  gameOptions.sort(() => 0.5 - Math.random());

  // display the options text

  for(let i = 0; i < gameOptions.length; i++){
    globVar.radioElements.values[i] = gameOptions[i];
    globVar.radioElements[i].nextSibling.textContent = gameOptions[i];
    globVar.radioElements[i].checked = false;
    globVar.radioElements[i].parentElement.style.color = ""; // Reset text color
    globVar.radioElements[i].parentElement.style.backgroundColor = ""; // Reset background color
  }

  if (globVar.usedGames.length === gamesArray.length){
    updateUI(false, false, true, "All games have been used. Restart the game!", 0);
    img.src = "./assets/0.6.jpg"; 
    return;
  }

  if(globVar.usedGames.length === 1){
    updateUI(false, true, true, "Let's Begin With 5 Score. which one is the Answer?", 0);
  } else {
    updateUI(false, true, true, "Which one is the Answer?", 0);
  }
};