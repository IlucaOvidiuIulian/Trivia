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
    <div>
      <select class="dropdown" id="difficulty" ></select> 
    </div>
   
    <div>
      <select class="dropdown" id="category"></select>
    </div>
    <div>
      <select class="dropdown" id="answer-type"></select>
    </div>
    <div></div>
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
//partea din dreapta - Game
//array ce contin valori si numele optiunilor in ordine

let difficultyOptions = [
  "Select difficulty",
  "Any difficulty",
  "Easy",
  "Medium",
  "Hard",
];
let difficultyValues = [
  "",
  "",
  "&difficulty=easy",
  "&difficulty=medium",
  "&difficulty=hard",
];
let answerOptions = [
  "Select answer type",
  "Any type",
  "With multiple answers",
  "With 2 answers",
];
let answerValues = ["", "", "&type=multiple", "&type=boolean"];
let categoryOptions = [
  "Select category",
  "All categories",
  "General Knowledge",
  "Entertainment: Books",
  "Entertainment: Film",
  "Entertainment: Music",
  "Entertainment: Musicals & Theatres",
  "Entertainment: Television",
  "Entertainment: Video Games",
  "Entertainment: Board Games",
  "Science & Nature",
  "Science: Computers",
  "Science: Mathematics",
  "Mythology",
  "Sports",
  "Geography",
  "History",
  "Politics",
  "Art",
  "Celebrities",
  "Animals",
  "Vehicles",
  "Entertainment: Comics",
  "Science: Gadgets",
  "Entertainment: Japanese Anime & Manga",
  "Entertainment: Cartoon & Animations",
];

let categoryValues = ["", "", "&category=9", "&category=10"];
// functie ce itereaza prin array-urile de values si de nume
let difficulty = document.getElementById("difficulty");
let category = document.getElementById("category");
let answer = document.getElementById("answer-type");
function createOptions(selectedElement, optionsArray, valuesArray) {
  //selectedElement = difficulty (ex.), optionsArray = difficultyOptions, valuesArray = difficultyValues
  for (let i = 0; i < optionsArray.length; i++) {
    let option = document.createElement("option");
    option.value = valuesArray[i];
    option.text = optionsArray[i];
    selectedElement.appendChild(option);
  }
}
createOptions(difficulty, difficultyOptions, difficultyValues);
createOptions(answer, answerOptions, answerValues);
/*
partea ce se ocupa de dropdown-ul de dificultate.

let difficulty = document.getElementById("difficulty");
console.log(difficulty.value);

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
*/
