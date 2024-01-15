"use strict";

//partea care creaza structura html de baza

let container = document.createElement("div");
document.body.appendChild(container);
container.classList.add("container");
container.innerHTML = `
  <div class="players-box">
    <h1>Create players</h1>
    <div>
      <button id="create-player" class="player-btn"><p>Add player</p></button>
      <button id="delete-player" class="player-btn"><p>Delete player</p></button>
    </div>
    <input type="text" placeholder="Player1" class="box player1"/>
  </div>
  <div class="game-box">
    <div class="difficulty-box">
      <h1>Select difficulty</h1>
      <select class="difficulty-dropdown"id="difficulty" name="difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select> 
    </div>
    <div class="answers-type-box">
    
    </div>
    <div class="category-box">
    
    </div>
  </div>
`;
//partea ce se ocupa cu butoanele de creare a jucatorilor maxim 4 minim 1
let createPlayerBtn = document.getElementById("create-player");
let deletePlayerBtn = document.getElementById("delete-player");
let playerNr = 2;

//partea care creaza player nou

createPlayerBtn.addEventListener("click", function () {
  if (playerNr <= 4) {
    let playerClass = "Player" + `${playerNr}`;
    let inputElement = document.createElement("input");

    inputElement.type = "text";
    inputElement.placeholder = `${playerClass}`;
    inputElement.classList.add("box", `player${playerNr}`);

    document.querySelector(".players-box").appendChild(inputElement);

    playerNr++;
  }
});

//partea care sterge un player

deletePlayerBtn.addEventListener("click", function () {
  if (playerNr > 2) {
    let playersBox = document.querySelector(".players-box");
    let lastPlayerInput = playersBox.querySelector(`.player${playerNr - 1}`);

    playersBox.removeChild(lastPlayerInput);

    playerNr--;
  }
});

// partea ce se ocupa de dropdown-ul de dificultate

let difficultyDropDown = document.getElementById("difficulty");
difficultyDropDown.value = "easy";

difficultyDropDown.addEventListener("change", function () {
  let selectedOption = this.options[this.selectedIndex];

  if (this.selectedOption) {
    this.selectedOption.removeAttribute("selected");
  }

  selectedOption.setAttribute("selected", "selected");

  this.removeChild(selectedOption);
  this.appendChild(selectedOption);

  this.selectedOption = selectedOption;
});
