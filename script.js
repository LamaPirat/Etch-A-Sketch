//Sets constants and variables
const container = document.querySelector(".container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let defaultRow = 16;
let defaultColumn = 16;

document.body.onload = defaultGrid(defaultRow, defaultColumn);

// Creates a grid of default(16x16)
function defaultGrid(rowAmount, columnAmount) {
  makeRows(rowAmount);
  makeColumns(columnAmount);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
  //Creates rows
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  }
}

//Creates columns
function makeColumns(cellNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      rows[j].appendChild(newCell).className = "cell";
    }
  }
}

// Creates inputFields
function userInput() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  let inputContainer = document.createElement("div");
  for (i = 0; i < 2; i++) {
    let newInput = document.createElement("input");
    newInput.type = "number";
    if ((i = 0)) {
      newInput.placeholder = "rows";
    } else {
      newInput.placeholder = "columns";
    }

    inputContainer.appendChild(newInput).className = "inputField";
  }
  let newButton = document.createElement("button");
  newButton.textContent = "Confirm";
  newButton.onclick = "reMake()";
  container.appendChild(inputContainer).className = "inputContainer";
  container.appendChild(newButton).className = "gridChange";
}

//Uses user input to reMake grid

function reMake() {
  let rowValue = inputContainer.firstChild.value;
  let columnValue = inputContainer.lastChild.value;
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  defaultGrid(rowValue, columnValue);
}
