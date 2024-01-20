"use strict";

//dropdown arrays

let categories = [
  { name: "All categories", value: "" },
  { name: "General Knowledge", value: "&category=9" },
  { name: "Entertainment: Books", value: "&category=10" },
  { name: "Entertainment: Film", value: "&category=11" },
  { name: "Entertainment: Music", value: "&category=12" },
  { name: "Entertainment: Musicals & Theatres", value: "&category=13" },
  { name: "Entertainment: Television", value: "&category=14" },
  { name: "Entertainment: Video Games", value: "&category=15" },
  { name: "Entertainment: Board Games", value: "&category=16" },
  { name: "Science & Nature", value: "&category=17" },
  { name: "Science: Computers", value: "&category=18" },
  { name: "Science: Mathematics", value: "&category=19" },
  { name: "Mythology", value: "&category=20" },
  { name: "Sports", value: "&category=21" },
  { name: "Geography", value: "&category=22" },
  { name: "History", value: "&category=23" },
  { name: "Politics", value: "&category=24" },
  { name: "Art", value: "&category=25" },
  { name: "Celebrities", value: "&category=26" },
  { name: "Animals", value: "&category=27" },
  { name: "Vehicles", value: "&category=28" },
  { name: "Entertainment: Comics", value: "&category=29" },
  { name: "Science: Gadgets", value: "&category=30" },
  { name: "Entertainment: Japanese Anime & Manga", value: "&category=31" },
  { name: "Entertainment: Cartoon & Animations", value: "&category=32" },
];
let answers = [
  { name: "Any type", value: "" },
  { name: "With multiple answers", value: "&type=multiple" },
  { name: "With 2 answers", value: "&type=boolean" },
];
let difficultyLevels = [
  { name: "Any difficulty", value: "" },
  { name: "Easy", value: "&difficulty=easy" },
  { name: "Medium", value: "&difficulty=medium" },
  { name: "Hard", value: "&difficulty=hard" },
];
// partea suport al HTML
let container = document.createElement("div");
document.body.appendChild(container);
container.classList.add("container");

// partea din stanga - se ocupa cu player management-ul jocului
let leftSection = document.createElement("div");
container.appendChild(leftSection);
leftSection.classList.add("left-section");

leftSection.innerHTML = `
<div class="title"><span>Create Player</span></div>
<div class="btn-section">
  <button class="btn addBtn">Add player</button>
  <button class="btn delBtn">Delete player</button>
</div>
<div class="player-section"></div>
`;

let addBtn = document.querySelector(".addBtn");
let delBtn = document.querySelector(".delBtn");

let playerSection = document.querySelector(".player-section");
let playerNr = 0;
let inputs = document.querySelectorAll(".playerInput");

function createPlayer(parent) {
  if (playerNr <= 3) {
    let input = document.createElement("input");
    input.placeholder = "Player " + Number(playerNr + 1);
    input.type = "text";
    input.classList.add("playerInput");
    parent.appendChild(input);
    playerNr++;
    inputs = document.querySelectorAll(".playerInput");
  }
}
addBtn.addEventListener("click", function () {
  createPlayer(playerSection);
});

function deletePlayer(parent) {
  let lastInput = inputs[inputs.length - 1];
  if (lastInput) {
    parent.removeChild(lastInput);
    playerNr--;
    inputs = document.querySelectorAll(".playerInput");
  }
}
delBtn.addEventListener("click", function () {
  deletePlayer(playerSection);
});

//partea din dreapta - se ocupa cu selectarea tipului de joc.

let rightSection = document.createElement("div");
container.appendChild(rightSection);
rightSection.classList.add("right-section");

rightSection.innerHTML = `
<div class="title"><span>Create Game</span></div>
<select class="category dropdown" value=""></select>
<select class="difficulty dropdown" value=""></select>
<select class="answer dropdown" value=""></select>
`;

// dropdown logic
function createDropdowns(array, selector) {
  for (let i = 0; i < array.length; i++) {
    let option = document.createElement("option");
    option.textContent = array[i].name;
    option.value = array[i].value;
    selector.appendChild(option);
  }
}
let categorySelector = document.querySelector(".category");
let difficultySelector = document.querySelector(".difficulty");
let answerSelector = document.querySelector(".answer");

createDropdowns(difficultyLevels, difficultySelector);
createDropdowns(categories, categorySelector);
createDropdowns(answers, answerSelector);

//url logic

let url;
function createUrl(par1, par2, par3) {
  return (url = "https://opentdb.com/api.php?amount=50" + par1 + par2 + par3);
}
// submit logic

let submit = document.createElement("button");
submit.classList.add("submit-btn");
submit.textContent = "START GAME";
container.appendChild(submit);

let playerNames = [];
function savePlayerNames() {
  inputs.forEach(function (input) {
    playerNames.push(input.value);
  });

  return playerNames;
}
submit.addEventListener("click", function () {
  savePlayerNames();
  createUrl(
    categorySelector.value,
    difficultySelector.value,
    answerSelector.value
  );
  if (playerNr > 0) {
    alert("Game will start soon");
  } else {
    alert("Add at least 1 player");
  }
});
