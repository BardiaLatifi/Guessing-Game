import { globVar } from "./globVar.js";
import { updateUI } from "./UI.js";

// Next Shot Button Functionality
export function nextShot() {
  // Change the UI
  document.getElementById("liveCatDisplay").style.display = "none";
  document.getElementById("previousBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("nextShotBtn").style.display = "block";
  document.getElementById("nextShotBtn").textContent = "Next Shot";
  document.getElementById("resetBtn").style.display = "block";
  document.getElementById("submitBtn").style.display = "block";
  document.getElementById("messageContainer").style.backgroundColor = "";

  // Display the messages
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("screenShot").style.display = "block";

  /* Getting a random screen shot */

  // Use the filteredGames array based on user selection
  let randomIndex;

  // Random game selection
  do {
    randomIndex = Math.floor(Math.random() * globVar.filteredGames.length);
  } while (globVar.usedGames.includes(globVar.filteredGames[randomIndex]));

  // Push current game to used games
  globVar.currentGame = globVar.filteredGames[randomIndex];
  globVar.usedGames.push(globVar.currentGame);

  // Show the screenshot
  const img = document.getElementById("screenShot");
  img.src = globVar.currentGame.src;

  /* Set the options */

  // Display the radio buttons
  document.getElementById("options").style.display = "flex";

  // Get the grade of the current game
  const currentGrade = globVar.currentGame.grade;

  console.log(currentGrade);

  // Filter games array to get only games of the same grade as currentGame
  const filteredByGrade = gamesArray.filter(game => game.grade === currentGrade);

  // Initialize game options with current game's name
  const gameOptions = [globVar.currentGame.name];

  // Generate random options from the filteredByGrade array
  while (gameOptions.length < globVar.radioElements.length) {
  const randomGame = filteredByGrade[Math.floor(Math.random() * filteredByGrade.length)].name;

  // Ensure the option is not already chosen
  if (!gameOptions.includes(randomGame)) {
    gameOptions.push(randomGame);
  }
  }

  // Shuffle game options
  gameOptions.sort(() => 0.5 - Math.random());

  // Display the options text
  for (let i = 0; i < gameOptions.length; i++) {
    globVar.radioElements.values[i] = gameOptions[i];
    globVar.radioElements[i].nextSibling.textContent = gameOptions[i];
    globVar.radioElements[i].checked = false;
    globVar.radioElements[i].parentElement.style.color = ""; // Reset text color
    globVar.radioElements[i].parentElement.style.backgroundColor = ""; // Reset background color
  }

  // Check if all games have been used
  if (globVar.usedGames.length >= globVar.filteredGames.length) {
    updateUI(false, false, true, "All available games have been used. Restart the game!", 0);
    document.getElementById("options").style.display = "none";
    img.src = "./assets/0.6.jpg"; // Placeholder image
    return;
  }

  // Display the question or prompt
  if (globVar.usedGames.length === 1) {
    updateUI(false, true, true, "Let's begin with a score of 5. Which one is the answer?", 0);
  } else {
    updateUI(false, true, true, "Which one is the answer?", 0);
  }
}