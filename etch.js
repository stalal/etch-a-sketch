let slider = document.getElementById("grid-size-selector");
let gridSizeForUser = document.querySelector(".grid-size");
let grid = document.querySelector(".grid");

buildGrid(25); // Default value of grid on page load
buildDynamicGrid(); // Then we call this function to make sure it regenerates based on slider value

function buildGrid(gridSize){

    // Remove existing grid elements
    // This is so that when the slider value changes, we can make a new grid
    grid.innerHTML = ''; 

    // Set a width for the grid
    const gridWidth = 400;

    // Then we calculate how much our cell sizes will need to be to fit into the grid
    // Found out through troubleshooting that the actual cell size was 2 px bigger than the calculated
    // cell size because of the 1 px solid border. So subtracted that from the cell size to make sure
    // higher cell sizes didn't mean the overall grid would overflow.  

    let cellSize = gridWidth/gridSize - 2;
    
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
    
    addColor(); // Add the ability to draw whenever we regenerate the grid
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

function buildDynamicGrid(){
    slider.addEventListener("input", function(){
       const sliderValue = slider.value;
       gridSizeForUser.textContent = sliderValue;
       buildGrid(parseInt(sliderValue));
    });

}

