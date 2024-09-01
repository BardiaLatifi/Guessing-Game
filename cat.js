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
  else if(currentCat === "done?"){
    nextShot();
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("previousBtn").style.display = "none";
    document.getElementById("nextShotBtn").style.display = "block";
    document.getElementById("dropDownContainer").style.display = "none";
  }
};

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
};



// Select the game platform

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
  document.getElementById("dropContent1").addEventListener("click", () => {
    globVar.userCatSelected.platforms[0] = "PC";
    console.log(globVar.userCatSelected.platforms[0]);
  });
  document.getElementById("dropContent2").addEventListener("click", () => {
    globVar.userCatSelected.platforms[1] = "PlayStation";
    console.log(globVar.userCatSelected.platforms[1]);
  });
  document.getElementById("dropContent3").addEventListener("click", () => {
    globVar.userCatSelected.platforms[2] = "Xbox";
    console.log(globVar.userCatSelected.platforms[2]);
  });
  document.getElementById("dropContent4").addEventListener("click", () => {
    globVar.userCatSelected.platforms[3] = "Nintendo";
    console.log(globVar.userCatSelected.platforms[3]);
  });
  document.getElementById("dropContent5").addEventListener("click", () => {
    globVar.userCatSelected.platforms[4] = "All Platforms";
    console.log(globVar.userCatSelected.platforms[4]);
  });
};

// Select the game genre

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
  document.getElementById("dropContent1").addEventListener("click", () => {
    globVar.userCatSelected.genres[0] = "Action-Adventure";
    console.log(globVar.userCatSelected.genres[0]);
  });
  document.getElementById("dropContent2").addEventListener("click", () => {
    globVar.userCatSelected.genres[1] = "RPG";
    console.log(globVar.userCatSelected.genres[1]);
  });
  document.getElementById("dropContent3").addEventListener("click", () => {
    globVar.userCatSelected.genres[2] = "Shooter";
    console.log(globVar.userCatSelected.genres[2]);
  });
  document.getElementById("dropContent4").addEventListener("click", () => {
    globVar.userCatSelected.genres[3] = "Roguelike";
    console.log(globVar.userCatSelected.genres[3]);
  });
  document.getElementById("dropContent5").addEventListener("click", () => {
    globVar.userCatSelected.genres[4] = "Soulslike";
    console.log(globVar.userCatSelected.genres[4]);
  });
  document.getElementById("dropContent6").addEventListener("click", () => {
    globVar.userCatSelected.genres[5] = "Metroidvania";
    console.log(globVar.userCatSelected.genres[5]);
  });
  document.getElementById("dropContent7").addEventListener("click", () => {
    globVar.userCatSelected.genres[6] = "Hack and Slash";
    console.log(globVar.userCatSelected.genres[6]);
  });
  document.getElementById("dropContent8").addEventListener("click", () => {
    globVar.userCatSelected.genres[7] = "Survival Horror";
    console.log(globVar.userCatSelected.genres[7]);
  });
  document.getElementById("dropContent9").addEventListener("click", () => {
    globVar.userCatSelected.genres[8] = "Stealth";
    console.log(globVar.userCatSelected.genres[8]);
  });
  document.getElementById("dropContent10").addEventListener("click", () => {
    globVar.userCatSelected.genres[9] = "All Genres";
    console.log(globVar.userCatSelected.genres[9]);
  });
};

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
  "Ancient Times (1th & 2th & 3th)",
  "SEGA Era (4th)",
  "PS1 Era (5th)",
  "PS2 & Xbox Era (6th)",
  "PS3 & Xbox 360 Era (7th)",
  "PS4 & Xbox one Era (8th)",
  "PS5 & X/S Era (9th)",
  "All Generations"
];
document.getElementById("dropContent1").addEventListener("click", () => {
  globVar.userCatSelected.generations[0] = "Ancient Times (1th & 2th & 3th)";
  console.log(globVar.userCatSelected.generations[0]);
});
document.getElementById("dropContent2").addEventListener("click", () => {
  globVar.userCatSelected.generations[1] = "SEGA Era (4th)";
  console.log(globVar.userCatSelected.generations[1]);
});
document.getElementById("dropContent3").addEventListener("click", () => {
  globVar.userCatSelected.generations[2] = "PS1 Era (5th)";
  console.log(globVar.userCatSelected.generations[2]);
});
document.getElementById("dropContent4").addEventListener("click", () => {
  globVar.userCatSelected.generations[3] = "PS2 & Xbox Era (6th)";
  console.log(globVar.userCatSelected.generations[3]);
});
document.getElementById("dropContent5").addEventListener("click", () => {
  globVar.userCatSelected.generations[4] = "PS3 & Xbox 360 Era (7th)";
  console.log(globVar.userCatSelected.generations[4]);
});
document.getElementById("dropContent6").addEventListener("click", () => {
  globVar.userCatSelected.generations[5] = "PS4 & Xbox one Era (8th)";
  console.log(globVar.userCatSelected.generations[5]);
});
document.getElementById("dropContent7").addEventListener("click", () => {
  globVar.userCatSelected.generations[6] = "PS5 & X/S Era (9th)";
  console.log(globVar.userCatSelected.generations[6]);
});
document.getElementById("dropContent8").addEventListener("click", () => {
  globVar.userCatSelected.generations[7] = "All Generations";
  console.log(globVar.userCatSelected.generations[7]);
});
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
  document.getElementById("dropContent1").addEventListener("click", () => {
    globVar.userCatSelected.ShotCount = 10;
    console.log(globVar.userCatSelected.ShotCount);
  });
  document.getElementById("dropContent2").addEventListener("click", () => {
    globVar.userCatSelected.ShotCount = 20;
    console.log(globVar.userCatSelected.ShotCount);
  });
  document.getElementById("dropContent3").addEventListener("click", () => {
    globVar.userCatSelected.ShotCount = 30;
    console.log(globVar.userCatSelected.ShotCount);
  });
  document.getElementById("dropContent4").addEventListener("click", () => {
    globVar.userCatSelected.ShotCount = 40;
    console.log(globVar.userCatSelected.ShotCount);
  });
  document.getElementById("dropContent5").addEventListener("click", () => {
    globVar.userCatSelected.ShotCount = 50;
    console.log(globVar.userCatSelected.ShotCount);
  });
  document.getElementById("dropContent6").addEventListener("click", () => {
    globVar.userCatSelected.ShotCount = "All Possible Shots";
    console.log(globVar.userCatSelected.ShotCount);
  });
};


// User category selection logic






// Update the dropdown content

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
};

// Show All the Category selected by the user

function showAllCats(){

    // UI
    document.getElementById("screenShot").src = "./assets/0.5.jpg";
    document.getElementById("dropBtn").textContent = "done?";
    document.getElementById("dropBtn").style.display = "none";
    document.getElementById("dropDownContainer").style.display = "block";
    console.log(globVar.userCatSelected);
};

