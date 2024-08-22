/* General */

// declare the variables 

let score = 5;
let currectAnswers = 0;
let wrongAnswers = 0;
let passed = 0;

// declare the Arrays

let currentGame;
let usedGames = [];

// firs tLook of UI

firstLook();

/* Functions */

// define the initial view of the UI
function firstLook(){
  document.getElementById("screenShot").src = "./assets/0.0.jpg";
  document.getElementById("dropBtn").textContent = "";
  document.getElementById("nextShotBtn").style.display = "none";
  document.getElementById("resetBtn").style.display = "none";
  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("dropDownContainer").style.display = "none";
  document.getElementById("previousBtn").style.display = "none";

}


/* categories */

// next and previous buttons

function next(){
  let currentCat = document.getElementById("dropBtn").textContent;

  // ensure the dropdown is collapsed by default
  if( document.getElementById("myDropdown").classList.contains("show")){
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // functional logic of the next button
  if(currentCat === ""){
    platformSelection();
  }
  else if(currentCat === "Platforms"){
    genreSelection();
  }
  else if(currentCat === "Genres"){
    gameGenerations();
  }
  else if(currentCat === "Generations"){
    shotLimit();
  }
  else if(currentCat === "Num of Shots"){
    showAllCats();
  }
}

function previous(){
  let currentCat = document.getElementById("dropBtn").textContent;

  // ensure the dropdown is collapsed by default
  if( document.getElementById("myDropdown").classList.contains("show")){
    document.getElementById("myDropdown").classList.toggle("show");
  }

    // functional logic of the previous button
  if(currentCat === "Platforms"){
    firstLook();
  }
  else if(currentCat === "Genres"){
    platformSelection();
  }
  else if(currentCat === "Generations"){
    genreSelection();
  }
  else if(currentCat === "Num of Shots"){
    gameGenerations();
  }
  else if(currentCat === "done?"){
    shotLimit();
  }
}

// update the dropdown content

function updateDropdown(contents){

  // set all dropdowns to block to ensure all buttons are accessible
  for (let i = 0; i < 10; i++){
    document.getElementById(`dropContent${i + 1}`).style.display = "block"; // Ensure all are visible initially
  }

  // update the content
  contents.forEach((content, index) =>{
    document.getElementById(`dropContent${index + 1}`).textContent = content;
  });

  // hide unused dropdown contents
  for (let i = contents.length; i < 10; i++){
    document.getElementById(`dropContent${i + 1}`).style.display = "none";
  }
}

function platformSelection(){

  // platform selection UI
  document.getElementById("screenShot").src = "./assets/0.1.jpg";
  document.getElementById("dropBtn").textContent = "Platforms";
  document.getElementById("previousBtn").style.display = "block";
  document.getElementById("dropDownContainer").style.display = "block";

  document.getElementById("dropBtn").onclick = function() {
  document.getElementById("myDropdown").classList.toggle("show");
  updateDropdown(dropdownContents);
};

let dropdownContents = [
  "PC",
  "PlayStation",
  "Xbox",
  "Nintendo",
  "All Platforms"
];
}

function genreSelection(){

  // genre selection UI
  document.getElementById("screenShot").src = "./assets/0.2.jpg";
  document.getElementById("dropBtn").textContent = "Genres";
  document.getElementById("dropDownContainer").style.display = "block";
  document.getElementById("dropBtn").onclick = function() {
  document.getElementById("myDropdown").classList.toggle("show");
  updateDropdown(dropdownContents);
};

let dropdownContents = [
  "Action-Adventure",
  "RPG",
  "Shooter",
  "Roguelike",
  "Soulslike",
  "Metroidvania",
  "Hack and Slash",
  "Survival Horror",
  "Stealth",
  "All Genres"
];
}

// Select the game generations

function gameGenerations(){

  // Generations UI
  document.getElementById("screenShot").src = "./assets/0.3.jpg";
  document.getElementById("dropBtn").textContent = "Generations";
  document.getElementById("dropDownContainer").style.display = "block";
  document.getElementById("dropBtn").onclick = function() {
  document.getElementById("myDropdown").classList.toggle("show");
  updateDropdown(dropdownContents);
};

let dropdownContents = [
  "Ancient Times",
  "SEGA Era (4th)",
  "PS1 Era (5th)",
  "PS2 & Xbox Era (6th)",
  "PS3 & Xbox 360 Era (7th)",
  "PS4 & Xbox one Era (8th)",
  "PS5 & Series X/S Era (9th)",
  "All Generations"
];
}

// Set the number of ScreenShots

function shotLimit(){

  // UI
  document.getElementById("screenShot").src = "./assets/0.4.jpg";
  document.getElementById("dropBtn").textContent = "Num of Shots";
  document.getElementById("dropDownContainer").style.display = "block";
  document.getElementById("dropBtn").style.display = "block";
  document.getElementById("dropBtn").onclick = function() {
  document.getElementById("myDropdown").classList.toggle("show");
  updateDropdown(dropdownContents);
};

let dropdownContents = [
  "10 Shots",
  "20 Shots",
  "30 Shots",
  "40 Shots",
  "50 Shots",
  "All Possible Shots",
];
}

// Show All the Category selected by the user

function showAllCats(){

    // UI
    document.getElementById("screenShot").src = "./assets/0.5.jpg";
    document.getElementById("dropBtn").textContent = "done?";
    document.getElementById("dropBtn").style.display = "none";
}

// change the style of buttons for better UX

function updateButtonColors() {
  const buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
      button.style.backgroundColor = button.disabled ? "darkgray" : "";
  }
}

// update the UI

function updateUI(nextShotBtn, submitBtn, resetBtn, resultMessage, scoreChange){

  document.getElementById("nextShotBtn").disabled = !nextShotBtn;
  document.getElementById("submitBtn").disabled = !submitBtn;
  document.getElementById("resetBtn").disabled = !resetBtn;

  score += scoreChange;
  document.getElementById("message").textContent = resultMessage;
  document.getElementById("score").textContent = `your Score is: ${score}`;

  updateButtonColors()
};

// generate the next screen shot and options

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


