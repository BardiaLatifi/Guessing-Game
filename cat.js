import { globVar } from "./globVar.js";
import { nextShot } from "./shotGenerate.js";
import { firstLook } from "./UI.js";

// ========================================================================
// Variables
// ========================================================================

let selectedPlatforms = globVar.userCatSelected.platforms;
let selectedGenres = globVar.userCatSelected.genres;
let selectedGenerations = globVar.userCatSelected.generations;
let selectedShotCount = globVar.userCatSelected.shotCount;

// ========================================================================
// UI
// ========================================================================

function selectAllElements() {
  const dropContentElements = document.getElementsByClassName("dropdown-content");
  for (let i = 0; i < dropContentElements.length; i++) {
    dropContentElements[i].classList.add('dropdown-content-selected');
  }
}

function clearAllElements() {
  const dropContentElements = document.getElementsByClassName("dropdown-content");
  for (let i = 0; i < dropContentElements.length; i++) {
    dropContentElements[i].classList.remove('dropdown-content-selected');
  }
}

// ========================================================================
// NEXT
// ========================================================================

export function next() {
  let currentCat = document.getElementById("dropBtn").textContent;

  // Ensure the dropdown is collapsed by default
  if (document.getElementById("myDropdown").classList.contains("show")) {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Functional logic of the next button
  if (currentCat === "") {
    platformSelection();
  } else if (currentCat === "Platforms") {
    if (selectedPlatforms.length !== 0) {
      genreSelection();
    }
  } else if (currentCat === "Genres") {
    if (selectedGenres.length !== 0) {
      gameGenerations();
    }
  } else if (currentCat === "Generations") {
    if (selectedGenerations.length !== 0) {
      shotLimit();
    }
  } else if (currentCat === "Num of Shots") {
    if (globVar.userCatSelected.shotCount !== 0) {
       // Check if there are enough games to display
      if (globVar.filteredGames.length < globVar.userCatSelected.shotCount) {
        document.getElementById("alertContainer").style.display = "flex";
        document.getElementById("shotLimitMessage").textContent = "Considering the categories you've selected, there are not enough screenshots to display. Please go back and make some changes."
        document.getElementById("alertYesBtn").style.display = "none";
        document.getElementById("alertNoBtn").style.display = "none";
        document.getElementById("alertOkBtn").style.display = "none";
        document.getElementById("alertCloseBtn").style.display = "block";
      } else {
        catFinal();
      }
    }
  } else if (currentCat === "done?") {
     nextShot();
  }

  // Reset the style of the selected buttons back to normal
  clearAllElements();

  console.log(globVar.userCatSelected);
  console.log(currentCat);
}

// ========================================================================
// PREVIOUS
// ========================================================================

export function previous() {
  let currentCat = document.getElementById("dropBtn").textContent;

  // Ensure the dropdown is collapsed by default
  if (document.getElementById("myDropdown").classList.contains("show")) {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Functional logic of the previous button
  if (currentCat === "Platforms") {
    firstLook();
  } else if (currentCat === "Genres") {
    platformSelection();
  } else if (currentCat === "Generations") {
    genreSelection();
  } else if (currentCat === "Num of Shots") {
    gameGenerations();
  } else if (currentCat === "done?") {
    shotLimit();
  }

  // Reset the style of the selected buttons back to normal
  clearAllElements();
}

// ========================================================================
// Update the dropdown content & Handle selection
// ========================================================================

function updateDropdown(category, contents) {
  contents.forEach((content, index) => {
    const dropContentElement = document.getElementById(`dropContent${index + 1}`);
    dropContentElement.textContent = content;
    dropContentElement.onclick = () => handleSelection(category, index, content);

    dropContentElement.style.display = "block"; // Show the content
  });

  // Hide unused dropdown contents
  for (let i = contents.length; i < 10; i++) {
    document.getElementById(`dropContent${i + 1}`).style.display = "none";
  }
}

// Handle the user selection of each drop-down
function handleSelection(category, index, selectedValue) {
  console.log(`Selected: ${selectedValue} in ${category}`);

  // Reassign the userCatSelected array properties
  if (category === "Platforms") {
    handlePlatformsSelection(selectedValue);
  } else if (category === "Genres") {
    handleGenresSelection(selectedValue);
  } else if (category === "Generations") {
    handleGenerationsSelection(selectedValue);
  } else if (category === "Num of Shots") {
    handleShotLimit(selectedValue);
  }

  // After selection, filter games based on current selections
  filterGames();

  // Display the user selection at the moment
  liveCatDisplay();

  // Toggle the selected class on the clicked element
  const dropContentElement = document.getElementById(`dropContent${index + 1}`);
  dropContentElement.classList.toggle('dropdown-content-selected'); // Toggle the 'selected' class
}

// Handle platform selection
function handlePlatformsSelection(selectedValue) {
  if (selectedValue === "All Platforms") {
    selectedPlatforms = selectedPlatforms.length < 4 ? ["PC", "PlayStation", "Xbox", "Nintendo"] : [];
    selectAllElements();
  } else {
    const selectedIndex = selectedPlatforms.indexOf(selectedValue);
    if (selectedIndex === -1) {
      selectedPlatforms.push(selectedValue); // Add if not present
    } else {
      selectedPlatforms.splice(selectedIndex, 1); // Remove if present
    }
  }
}

// Handle genre selection
function handleGenresSelection(selectedValue) {
  if (selectedValue === "All Genres") {
    selectedGenres = selectedGenres.length < 9 ? ["Action-adventure",
                                                  "RPG", "Shooter", "Roguelike",
                                                  "Soulslike", "Metroidvania", 
                                                  "Hack and Slash", "Survival/Horror",
                                                  "Stealth"] : [];
    selectAllElements();
  } else {
    const selectedIndex = selectedGenres.indexOf(selectedValue);
    if (selectedIndex === -1) {
      selectedGenres.push(selectedValue); // Add if not present
    } else {
      selectedGenres.splice(selectedIndex, 1); // Remove if present
    }
  }
}

// Handle generation selection
function handleGenerationsSelection(selectedValue) {
  if (selectedValue === "All Generations") {
    selectedGenerations = selectedGenerations.length < 7 ? ["Ancient Times",
                                                            "4th gen", "5th gen", "6th gen",
                                                            "7th gen", "8th gen", "9th gen"] : [];
    selectAllElements();
  } else {
    const selectedIndex = selectedGenerations.indexOf(selectedValue);
    if (selectedIndex === -1) {
      selectedGenerations.push(selectedValue); // Add if not present
    } else {
      selectedGenerations.splice(selectedIndex, 1); // Remove if present
    }
  }
}

// Handle number of shots selection
function handleShotLimit(selectedValue) {
  if (selectedValue === "All Possible Shots") {
    globVar.userCatSelected.shotCount = gamesArray.length;
    selectedShotCount = globVar.userCatSelected.shotCount;
  } else {
    globVar.userCatSelected.shotCount = selectedValue;
    selectedShotCount = selectedValue;
  }
}

// Function to filter games based on current selections
function filterGames() {
  globVar.filteredGames = gamesArray.filter(game => {
    const platformMatch = selectedPlatforms.length === 0 || selectedPlatforms.some(platform => game.platform.includes(platform));
    const genreMatch = selectedGenres.length === 0 || selectedGenres.some(genre => game.gener.includes(genre));
    const generationMatch = selectedGenerations.length === 0 || selectedGenerations.some(generation => game.generation.includes(generation));
    return platformMatch && genreMatch && generationMatch;
  });

  // Show the Games on the console to check the possible problems
  console.log("Filtered Games:", globVar.filteredGames);
}

// Clean Up the empty values
function cleanUpSelections() {
  selectedPlatforms = selectedPlatforms.filter(platform => platform !== undefined);
  selectedGenres = selectedGenres.filter(genre => genre !== undefined);
  selectedGenerations = selectedGenerations.filter(generation => generation !== undefined);
}

// ========================================================================
// Categories
// ========================================================================

// Select the game platform
function platformSelection() {
  document.getElementById("screenShot").src = "./assets/0.1.jpg";
  document.getElementById("dropBtn").textContent = "Platforms";
  document.getElementById("previousBtn").style.display = "block";
  document.getElementById("dropDownContainer").style.display = "block";

  let dropdownContents = [
    "PC",
    "PlayStation",
    "Xbox",
    "Nintendo",
    "All Platforms"
  ];

  document.getElementById("dropBtn").onclick = function() {
    document.getElementById("myDropdown").classList.toggle("show");
    updateDropdown("Platforms", dropdownContents);
  }
}

// Select the game genre
function genreSelection() {
  document.getElementById("screenShot").src = "./assets/0.2.jpg";
  document.getElementById("dropBtn").textContent = "Genres";
  document.getElementById("dropDownContainer").style.display = "block";

  let dropdownContents = [
    "Action-adventure",
    "RPG",
    "Shooter",
    "Roguelike",
    "Soulslike",
    "Metroidvania",
    "Hack and Slash",
    "Survival/Horror",
    "Stealth",
    "All Genres"
  ];

  document.getElementById("dropBtn").onclick = function() {
    document.getElementById("myDropdown").classList.toggle("show");
    updateDropdown("Genres", dropdownContents);
  }
}

// Select the game generations
function gameGenerations() {
  document.getElementById("screenShot").src = "./assets/0.3.jpg";
  document.getElementById("dropBtn").textContent = "Generations";
  document.getElementById("dropDownContainer").style.display = "block";

  let dropdownContents = [
    "Ancient Times",
    "4th gen",
    "5th gen",
    "6th gen",
    "7th gen",
    "8th gen",
    "9th gen",
    "All Generations"
  ];

  document.getElementById("dropBtn").onclick = function() {
    document.getElementById("myDropdown").classList.toggle("show");
    updateDropdown("Generations", dropdownContents);
  }
}

// Set the number of ScreenShots
function shotLimit() {
  document.getElementById("screenShot").src = "./assets/0.4.jpg";
  document.getElementById("dropBtn").textContent = "Num of Shots";
  document.getElementById("dropDownContainer").style.display = "block";
  document.getElementById("dropBtn").style.display = "block";
  document.getElementById("nextBtn").style.display = "block";
  document.getElementById("nextBtn").textContent = "Next";
  document.getElementById("nextShotBtn").style.display = "none";

  let dropdownContents = [10, 20, 30, 40, 50, "All Possible Shots"];

  document.getElementById("dropBtn").onclick = function() {
    document.getElementById("myDropdown").classList.toggle("show");
    updateDropdown("Num of Shots", dropdownContents);
  }
}

function catFinal() {
  document.getElementById("screenShot").src = "./assets/0.5.jpg";
  document.getElementById("dropBtn").textContent = "done?";
  document.getElementById("dropBtn").style.display = "none";
  document.getElementById("dropDownContainer").style.display = "none";
  document.getElementById("nextBtn").textContent = "Start";

  // Shuffle & Limit the filtered games to the number of shots selected by the user
  globVar.filteredGames.sort(() => 0.5 - Math.random());
  globVar.filteredGames = globVar.filteredGames.slice(0, globVar.userCatSelected.shotCount);
  console.log(globVar.filteredGames);
}

// ========================================================================
// DISPLAYING
// ========================================================================

// Live Displaying
function liveCatDisplay() {
  document.getElementById("liveCatDisplay").style.display = "block";
  document.getElementById("messageContainer").style.backgroundColor = "";
  document.getElementById("liveCatPlatforms").textContent = `Platforms: ${selectedPlatforms.join(', ')}`;
  document.getElementById("liveCatGenres").textContent = `Genres: ${selectedGenres.join(', ')}`;
  document.getElementById("liveCatGenerations").textContent = `Generations: ${selectedGenerations.join(', ')}`;
  document.getElementById("liveCatShotLimit").textContent = `${selectedShotCount} Screen Shots.`;
  document.getElementById("liveAvailableGames").textContent = `${globVar.filteredGames.length} Games available according to your selection.`;
}