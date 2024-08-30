import { globVar } from "./globVar.js";

// define the initial view of the UI

export function firstLook(){
  document.getElementById("screenShot").src = "./assets/0.0.jpg";
  document.getElementById("dropBtn").textContent = "";
  document.getElementById("nextShotBtn").style.display = "none";
  document.getElementById("resetBtn").style.display = "none";
  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("dropDownContainer").style.display = "none";
  document.getElementById("previousBtn").style.display = "none";
};

 function updateButtonColors() {
  const buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
      button.style.backgroundColor = button.disabled ? "darkgray" : "";
  };
};

// update radio input colors

for (let i = 0; i < globVar.radioElements.length; i++) {
  globVar.radioElements[i].addEventListener('change', function() {
        // Reset styles for all radio buttons
        globVar.radioElements.forEach(rb => {
            rb.parentElement.style.color = ""; // Reset color
            rb.parentElement.style.backgroundColor = ""; // Reset background
        });

        // Apply styles to the checked radio button's label
        if (this.checked) {
            this.parentElement.style.color = "white"; // Change text color
            this.parentElement.style.backgroundColor = "hsl(148, 71%, 44%)"; // Change background color
        };
    });
};


// update the UI

export function updateUI(nextShotBtn, submitBtn, resetBtn, resultMessage, scoreChange){

  document.getElementById("nextShotBtn").disabled = !nextShotBtn;
  document.getElementById("submitBtn").disabled = !submitBtn;
  document.getElementById("resetBtn").disabled = !resetBtn;

  globVar.score += scoreChange;
  document.getElementById("message").textContent = resultMessage;
  document.getElementById("score").textContent = `your Score is: ${globVar.score}`;

  updateButtonColors()
};

