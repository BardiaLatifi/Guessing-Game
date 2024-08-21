let currentGame;
let score = 5;

let usedGames = [];

document.getElementById("submitBtn").disabled = true;




/* UI Update Function */

function updateUI(nextShotEnabled, submitButtonEnabled, resetButtonEnabled, scoreMessage, scoreChange) {

  score += scoreChange;
  document.getElementById("score").textContent = `Your Score is: ${score}`;
  
  document.getElementById("message").textContent = scoreMessage;
  
  document.getElementById("nextShotBtn").disabled = !nextShotEnabled;
  document.getElementById("submitBtn").disabled = !submitButtonEnabled;
  document.getElementById("resetBtn").disabled = !resetButtonEnabled;
}

function resetGame() {
  score = 5;
  usedGames = [];
  updateUI(true, false, false, "Game restarted! Press Next Shot to Start Over", 0);
  document.getElementById("score").textContent = "";
}

/* Next Shot Function */ 

function nextShot(){
  document.getElementById("results").style.display = "block"; 
  
  if (usedGames.length === gamesArray.length){
    updateUI(false, false, true, "All games have been used. Restart the game!", 0);
    return;
  }

  let randomIndex;
  
  do{
    randomIndex = Math.floor(Math.random() * gamesArray.length);
  }
  while(usedGames.includes(gamesArray[randomIndex]));

  currentGame = gamesArray[randomIndex];
  usedGames.push(currentGame); // adding current game to used games

  const img = document.getElementById("screenShot");
  img.src = currentGame.src;

  // set the radio options

  const options = document.getElementsByName("gameOption");
  const answers = [currentGame.name];

  while (answers.length < options.length) {
    const randomGame = gamesArray[Math.floor(Math.random() * gamesArray.length)].name;
    if (!answers.includes(randomGame)) {
      answers.push(randomGame);
    }
  }

  // Shuffle options randomly

  answers.sort(() => 0.5 - Math.random());

  // Update radio buttons
  
  for (let i = 0; i < options.length; i++) {
    options[i].value = answers[i];
    options[i].nextSibling.textContent = answers[i]; // Update the label text
    options[i].checked = false; 
  }


  document.getElementById("options").style.display = "flex";
  document.getElementById("options").style.justifyContent = "space-evenly";

  updateUI(false, true, true, "which one is the Answer?", 0);

  if(usedGames.length === 1){
    updateUI(false, true, true, "Let's Begin With 5 Score. which one is the Answer?", 0)
  }
}

/* The submit button function */ 

function submit(){
  const options = document.getElementsByName("gameOption");
  let userAnswer = "";

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      userAnswer = options[i].value;
      break;
    }
  }

  const answer = currentGame.name;
  document.getElementById("results").style.display = "block";

  if(userAnswer === ""){
    updateUI(true, false, true, "OK! You don't know the answer. go for the Next Shot.", -1);
  }


  else if(userAnswer === answer){
    updateUI(true, false, true, "The answer is correct! Keep going!!", 3);
  }
  else{
    updateUI(true, false, true,"Wrong! Go for the Next Shot.", -2);

  }

  if(score <= 2){
    updateUI(true, false, true,"You are close to losing. If the score is negative, the Game is Over", 0)
  }

  if(score < 0){
    updateUI(false, false, true,"Game Over! Please Press the Reset Button", 0)
  }
}
