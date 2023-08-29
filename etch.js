// Features to add
// Ask user for grid size
// Allow user to 

buildGrid(20);

function buildGrid(gridSize){

    const container = document.querySelector(".container");
    const containerWidth = container.offsetWidth;

    let gridHeight = 500/gridSize;
    let gridWidth = 500/gridSize;

    gridHeight = gridHeight + "px";
    gridWidth = gridWidth + "px";

    for(let i=0; i<gridSize; i++){
        
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("gridColumn");
        gridColumn.style.display = "flex";
        gridColumn.style.flexDirection = "column";

        for(let j=0; j<gridSize; j++){
            const cell = document.createElement("div");
            
            cell.style.border = "1px solid black";
            cell.style.height = gridHeight;
            cell.style.width = gridWidth;
            cell.classList.add("gridSquare");
            gridColumn.appendChild(cell);
        }
        
        container.appendChild(gridColumn);
    }

    const cells = document.querySelectorAll(".gridSquare");

    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style.backgroundColor = "#" + randomColor;
        });
    });
    
}

