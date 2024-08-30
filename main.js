import * as combine from "./combine.js";

// first Look of UI

combine.UI.firstLook();


/* categories */

// Next and Previous Buttons

document.getElementById("nextBtn").addEventListener("click", combine.cat.next);
document.getElementById("previousBtn").addEventListener("click", combine.cat.previous);

// Next Shot Button

document.getElementById("nextShotBtn").addEventListener("click", combine.nextShot.nextShot);

// Submit Button

document.getElementById("submitBtn").addEventListener("click", combine.submit.submit);

// Results Pop Up Buttons

document.getElementById("resetBtn").addEventListener("click", combine.resultsPOpUp.showResults);
document.getElementById("alertYesBtn").addEventListener("click", combine.resultsPOpUp.reset);
document.getElementById("alertNoBtn").addEventListener("click", combine.resultsPOpUp.resume);
document.getElementById("alertOkBtn").addEventListener("click", combine.resultsPOpUp.reset);



