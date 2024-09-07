import { globVar } from "./globVar.js";
import { nextShot } from "./shotGenerate.js";
import { firstLook } from "./UI.js";

// Buttons Functionality

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
    if (globVar.userCatSelected.platforms.length !== 0) {
      genreSelection();
    }
  }
  else if(currentCat === "Genres"){
    if (globVar.userCatSelected.genres.length !== 0) {
      gameGenerations();
    }
  }
  else if(currentCat === "Generations"){
    if (globVar.userCatSelected.generations.length !== 0) {
      shotLimit();
    }
  }
  else if(currentCat === "Num of Shots"){
    if (globVar.userCatSelected.shotCount !== 0) {
      showAllCats();
    }
  }
  else if(currentCat === "done?"){
    nextShot();
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("previousBtn").style.display = "none";
    document.getElementById("nextShotBtn").style.display = "block";
    document.getElementById("dropDownContainer").style.display = "none";
    document.getElementById("catDisplayBox").style.display = "none";
  }
  console.log(globVar.userCatSelected);
}

export function previous(){
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

// Update the dropdown content

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
  if (category === "Platforms") {
      globVar.userCatSelected.platforms[index] = selectedValue;
  } else if (category === "Genres") {
      globVar.userCatSelected.genres[index] = selectedValue;
  } else if (category === "Generations") {
      globVar.userCatSelected.generations[index] = selectedValue;
  } else if (category === "Num of Shots") {
      globVar.userCatSelected.shotCount = selectedValue;
  }
}

// Clean Up the empty values

function cleanUpSelections() {
  globVar.userCatSelected.platforms = globVar.userCatSelected.platforms.filter(platform => platform !== undefined);
  globVar.userCatSelected.genres = globVar.userCatSelected.genres.filter(genre => genre !== undefined);
  globVar.userCatSelected.generations = globVar.userCatSelected.generations.filter(generation => generation !== undefined);
}


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
    "Ancient Times (1th & 2th & 3th)",
    "SEGA Era (4th)",
    "PS1 Era (5th)",
    "PS2 & Xbox Era (6th)",
    "PS3 & Xbox 360 Era (7th)",
    "PS4 & Xbox one Era (8th)",
    "PS5 & X/S Era (9th)",
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

  let dropdownContents = [
    "10 Shots",
    "20 Shots",
    "30 Shots",
    "40 Shots",
    "50 Shots",
    "All Possible Shots",
    ];

document.getElementById("dropBtn").onclick = function() {
  document.getElementById("myDropdown").classList.toggle("show");
  updateDropdown("Num of Shots",dropdownContents);
  }
}

// Show All the Category selected by the user

function showAllCats() {

    // Clean Up

  cleanUpSelections();
  console.log(globVar.userCatSelected);

    // UI

  document.getElementById("screenShot").src = "./assets/0.5.jpg";
  document.getElementById("dropBtn").textContent = "done?";
  document.getElementById("dropBtn").style.display = "none";
  document.getElementById("dropDownContainer").style.display = "block";
  document.getElementById("catDisplayBox").style.display = "flex";
  document.getElementById("selectedPlatforms").textContent = "Platforms";
  document.getElementById("selectedGenres").textContent = "Game Genre";
  document.getElementById("selectedGens").textContent = "Generations";
  document.getElementById("numOfShots").textContent = globVar.userCatSelected.shotCount;


}

