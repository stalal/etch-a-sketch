buildGrid(20);
addColor();

function buildGrid(gridSize){

    // Selecting the grid and finding its width
    const grid = document.querySelector(".grid");
    const gridWidth = grid.offsetWidth;

    // Then we calculate how much our cell sizes will need to be for filling up 50% of the grid
    // and having the required number of cells

    let cellSize = gridWidth*0.3/gridSize;
    
    cellSize = cellSize + "px";
    
    // Build the first column of cells

    for(let i=0; i<gridSize; i++){
        
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("gridColumn");
        gridColumn.style.display = "flex";
        gridColumn.style.flexDirection = "column";

        // For each gridColumn, we add cells

        for(let j=0; j<gridSize; j++){
            const cell = document.createElement("div");
            
            cell.style.border = "1px solid black";
            cell.style.height = cellSize;
            cell.style.width = cellSize;
            cell.classList.add("cell");

            // Then we append each cell to the gridColumn
            gridColumn.appendChild(cell);
        }
        
        // Then we append the gridColumn to the grid
        grid.appendChild(gridColumn);
    }
    
}

function addColor(){

    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style.backgroundColor = "#" + randomColor;
        });
    });
}