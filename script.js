
/* General */

// declare the score variables 

let score = 5;
let currectAnswers = 0;
let wrongAnswers = 0;
let passed = 0;

// declare the Arrays

let currentGame;
let usedGames = [];

// define the initial view of the game

document.getElementById("nextShotBtn").textContent = "Start";
document.getElementById("resetBtn").style.display = "none";
document.getElementById("submitBtn").style.display = "none";

/* Functions */

function updateButtonColors() {
  const buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
      button.style.backgroundColor = button.disabled ? "darkgray" : "";
  }
}

function updateUI(nextShotBtn, submitBtn, resetBtn, resultMessage, scoreChange){

  document.getElementById("nextShotBtn").disabled = !nextShotBtn;
  document.getElementById("submitBtn").disabled = !submitBtn;
  document.getElementById("resetBtn").disabled = !resetBtn;

  score += scoreChange;
  document.getElementById("message").textContent = resultMessage;
  document.getElementById("score").textContent = `your Score is: ${score}`;

  updateButtonColors()
};

function nextShot(){

  // change the UI
  document.getElementById("nextShotBtn").textContent = "Next Shot";
  document.getElementById("resetBtn").style.display = "block";
  document.getElementById("submitBtn").style.display = "block";

  // display the Messages

  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("screenShot").style.display = "block";

  /* getting a random screen shot */

  // random game

  let randomIndex;

  do{
    randomIndex = Math.floor(Math.random() * gamesArray.length);
  }
  while(usedGames.includes(gamesArray[randomIndex]));

  // pusing current game to used game

  currentGame = gamesArray[randomIndex];
  usedGames.push(currentGame);

  // showing the screen shot

  const img = document.getElementById("screenShot");
  img.src = currentGame.src;

  /* set the options */

  // display the radio buttons

  document.getElementById("options").style.display = "flex";
  document.getElementById("options").style.justifyContent  = "space-evenly";

  const radioElements = document.getElementsByName("gameOption");
  const gameOptions = [currentGame.name];

  // generate the random options

  while(gameOptions.length < radioElements.length){
    const randomGame = gamesArray[Math.floor(Math.random() * gamesArray.length)].name;
    if(!gameOptions.includes(randomGame)){
      gameOptions.push(randomGame);
    }
  }

  // Shuffle Game options

  gameOptions.sort(() => 0.5 - Math.random());

  // display the options text

  for(i = 0; i < gameOptions.length; i++){
    radioElements.values[i] = gameOptions[i];
    radioElements[i].nextSibling.textContent = gameOptions[i];
    radioElements[i].checked = false;
  }

  if (usedGames.length === gamesArray.length){
    updateUI(false, false, true, "All games have been used. Restart the game!", 0);
    return;
  }
  updateUI(false, true, true, "Let's Begin With 5 Score. which one is the Answer?", 0);
};

function submit(){
  const radioElements = document.getElementsByName("gameOption");
  let userAnswer = "";

  // find the user answer

  for(i = 0; i < radioElements.length; i++){
    if(radioElements[i].checked){
      userAnswer = radioElements.values[i];
      break;
    }
  }

  if(userAnswer === currentGame.name){
    updateUI(true, false, true, "Well don! the Answer is currect!", 3);
    currectAnswers++;
  }

  if(userAnswer === ""){
    updateUI(true, false, true, "Ok! you dont know the answer. go for the next shot", -1);
    passed++;
  }

  if(userAnswer !== currentGame.name && userAnswer !== ""){
    updateUI(true, false, true, `wrong! the Answer was ${currentGame.name}. press Next Shot Button`, -2);
    wrongAnswers++;
  }

  if(score <= 2){
    updateUI(true, false, true, `the answer was ${currentGame.name}. if you get zero or negative score, the game will be over`, 0);
  }

  if(score <= 1){
    updateUI(true, false, true, ` No! it's ${currentGame.name}.This is your Last chance. try your best or loos the game`, 0);
  }

  if(score <= 0){
    updateUI(false, false, true, "GAME OVER! PLEASE PRESS THE RESET BUTTON", 0);
  }
};

function showResults(){
  document.getElementById("alertContainer").style.display = "flex";
  document.getElementById("resultAlert").textContent = "The Results:";
  document.getElementById("resultShots").textContent = `The photos were displayed: ${usedGames.length}`;
  document.getElementById("resultCorrect").textContent = `Correct Answers: ${currectAnswers}`;
  document.getElementById("resultWrong").textContent = `Wrong Answers: ${wrongAnswers}`;
  document.getElementById("resultPassed").textContent = `didn't answer: ${passed}`;
  document.getElementById("scoreMessage").textContent = `score: ${score}`;
  document.getElementById("resetMessage").textContent = "do you want to reset the game?";
  updateUI(false, false, false, "", 0);
  document.getElementById("messageContainer").style.display = "none";

  if(score <= 0){
    document.getElementById("alertYesBtn").style.display = "none";
    document.getElementById("alertNoBtn").style.display = "none";
    document.getElementById("resetMessage").style.display = "none";
    document.getElementById("alertOkBtn").style.display = "block";
  } else{
    document.getElementById("alertOkBtn").style.display = "none";
  }
}

function reset(){
  location.reload();
}

function resume(){
  document.getElementById("alertContainer").style.display = "none";
  document.getElementById("messageContainer").style.display = "block";

  if(usedGames.length > (currectAnswers + wrongAnswers + passed)){
    updateUI(false, true, true, "Thanks for continuing the game. Which one is the answer?", 0);
  }
  if(usedGames.length === (currectAnswers + wrongAnswers + passed)){
    updateUI(true, false, true, "You didn't leave! I appreciate it. Please take the next shot.", 0);
  }
}


