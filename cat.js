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

export function next(){
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
    if (selectedPlatforms.length !== 0) {
      genreSelection();
    }
  }
  else if(currentCat === "Genres"){
    if (selectedGenres.length !== 0) {
      gameGenerations();
    }
  }
  else if(currentCat === "Generations"){
    if (selectedGenerations.length !== 0) {
      shotLimit();
    }
  }
  else if(currentCat === "Num of Shots"){
    if (globVar.userCatSelected.shotCount !== 0) {
      catFinal()

    }
  }
  else if(currentCat === "done?"){
      nextShot();
  }

  // Reset the style of the selected buttons back to normal
  clearAllElements()

  console.log(globVar.userCatSelected);
  console.log(currentCat);
}

// ========================================================================
    // PREVIOUS
// ========================================================================

export function previous(){
  let currentCat = document.getElementById("dropBtn").textContent;

  // ensure the dropdown is collapsed by default
  if(document.getElementById("myDropdown").classList.contains("show")){
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

    // Reset the style of the selected buttons back to normal
    clearAllElements()
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
  // show on console
  console.log(`Selected: ${selectedValue} in ${category}`);

  // Reassign the userCatSelected array properties
  if (category === "Platforms") {
    if (selectedValue === "All Platforms") {
      if (selectedPlatforms.length < 4) {
        selectedPlatforms = [
          "PC",
          "PlayStation",
          "Xbox",
          "Nintendo"
        ];
        selectAllElements()
        liveCatDisplay()
      } else {
        selectedPlatforms = [];
        clearAllElements()
        liveCatDisplay()
      }
    } else {
      // user can toggle the options
      const selectedIndex = selectedPlatforms.indexOf(selectedValue);
      if (selectedIndex === -1) {
        selectedPlatforms.push(selectedValue); // Add if not present
      } else {
        selectedPlatforms.splice(selectedIndex, 1); // Remove if present
      }
      liveCatDisplay()
    }
  } else if (category === "Genres") {
    if (selectedValue === "All Genres") {
      if (selectedGenres.length < 9){
        selectedGenres = [
          "Action-Adventure",
          "RPG",
          "Shooter",
          "Roguelike",
          "Soulslike",
          "Metroidvania",
          "Hack and Slash",
          "Survival Horror",
          "Stealth"
        ];
        selectAllElements()
        liveCatDisplay()
      } else {
        selectedGenres = [];
        clearAllElements()
        liveCatDisplay()
      }
    } else {
      // user can toggle the options
      const selectedIndex = selectedGenres.indexOf(selectedValue);
      if (selectedIndex === -1) {
        selectedGenres.push(selectedValue); // Add if not present
      } else {
        selectedGenres.splice(selectedIndex, 1); // Remove if present
      }
      liveCatDisplay()
    }
  } else if (category === "Generations") {
    if (selectedValue === "All Generations") {
      if (selectedGenerations.length < 7){
        selectedGenerations = [
          "Ancient Times",
          "4th gen",
          "5th gen",
          "6th gen",
          "7th gen",
          "8th gen",
          "9th gen",
        ];
        selectAllElements()
        liveCatDisplay()
      } else {
        selectedGenerations = [];
        clearAllElements()
        liveCatDisplay()
      }
    } else {
      // user can toggle the options
      const selectedIndex = selectedGenerations.indexOf(selectedValue);
      if (selectedIndex === -1) {
        selectedGenerations.push(selectedValue); // Add if not present
      } else {
        selectedGenerations.splice(selectedIndex, 1); // Remove if present
      }
      liveCatDisplay()
    }
  } else if (category === "Num of Shots") {
    if (selectedValue === "All Possible Shots") {
      globVar.userCatSelected.shotCount = gamesArray.length;
      selectedShotCount = globVar.userCatSelected.shotCount;
      cleanUpSelections()
    } else {
      globVar.userCatSelected.shotCount = selectedValue;
      selectedShotCount = selectedValue;
      }
      liveCatDisplay()
  }

    // Toggle the selected class on the clicked element
    const dropContentElement = document.getElementById(`dropContent${index + 1}`);
    dropContentElement.classList.toggle('dropdown-content-selected'); // Toggle the 'selected' class
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

  // platform selection UI
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

  // genre selection UI
  document.getElementById("screenShot").src = "./assets/0.2.jpg";
  document.getElementById("dropBtn").textContent = "Genres";
  document.getElementById("dropDownContainer").style.display = "block";

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

document.getElementById("dropBtn").onclick = function() {
  document.getElementById("myDropdown").classList.toggle("show");
  updateDropdown("Genres" ,dropdownContents);
  }
}

// Select the game generations

function gameGenerations() {

  // Generations UI
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

  // UI

  document.getElementById("screenShot").src = "./assets/0.4.jpg";
  document.getElementById("dropBtn").textContent = "Num of Shots";
  document.getElementById("dropDownContainer").style.display = "block";
  document.getElementById("dropBtn").style.display = "block";
  document.getElementById("nextBtn").style.display = "block";
  document.getElementById("nextBtn").textContent = "Next";
  document.getElementById("nextShotBtn").style.display = "none";

  let dropdownContents = [
    10,
    20,
    30,
    40,
    50,
    "All Possible Shots",
    ];

document.getElementById("dropBtn").onclick = function() {
  document.getElementById("myDropdown").classList.toggle("show");
  updateDropdown("Num of Shots",dropdownContents);
  }
}

function catFinal() {

  // UI
  document.getElementById("screenShot").src = "./assets/0.5.jpg";
  document.getElementById("dropBtn").textContent = "done?";
  document.getElementById("dropBtn").style.display = "none";
  document.getElementById("dropDownContainer").style.display = "none";
  document.getElementById("nextBtn").textContent = "Start";
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
}