function generateGridItem(){
    const gridItem = document.createElement("div");
    gridItem.style.cssText = "background-color: white"
    gridItem.classList.add("grid-item");
    gridItem.addEventListener('mouseover', () => {
        gridItem.style.cssText = "background-color: black;"
    })
    return gridItem;
}

function generateGrid(gridSize=16) {
  let containerDiv = document.querySelector(".container");
  containerDiv.style.cssText = `grid-template-columns: repeat(${gridSize}, auto)`;
  let i = 0;
  while (i < gridSize * gridSize) {
    const gridItem = generateGridItem()
    containerDiv.appendChild(gridItem);
    i++;
  }
}

function adjustGridSize(gridSize) {
  if (gridSize < 10) {
    gridSize = 10;
    alert("Grid size set to 10 as a minimum.");
    return gridSize;
  } else if (gridSize > 100) {
    gridSize = 100;
    alert("Grid size set to 100 as a maximum.");
    return gridSize;
  } else {
    return gridSize;
  }
}

function removeGrid(){
    let currentContainerDiv = document.querySelector(".container");
    let currentGridItems = Array.from(document.querySelectorAll(".grid-item"))
    let currentGridItemsLength = currentGridItems.length;
    for (let i = 0; i < currentGridItemsLength; i++) {
        const item = document.querySelector(".grid-item")
        currentContainerDiv.removeChild(item);
    }
    
}

generateGrid()
const newGridButton = document.querySelector("button.user-grid-size");


newGridButton.addEventListener('click', () => {
    let userGeneratedGridSize = prompt("What size do you want your N-by-N grid to be?");
    userGeneratedGridSize = adjustGridSize(userGeneratedGridSize);
    removeGrid();
    generateGrid(userGeneratedGridSize);
})