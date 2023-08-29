

buildGrid(20);

function buildGrid(gridSize){

    const container = document.querySelector(".container");
    const containerWidth = container.offsetWidth;

    let gridHeight = 500/gridSize;
    let gridWidth = 500/gridSize;

    gridHeight = gridHeight + "px";
    gridWidth = gridWidth + "px";

    for(let i=0; i<gridSize; i++){
        
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";
        row.style.flexDirection = "column";

        for(let j=0; j<gridSize; j++){
            const div = document.createElement("div");
            
            div.style.border = "1px solid black";
            div.style.height = gridHeight;
            div.style.width = gridWidth;
            div.classList.add("gridSquare");
            row.appendChild(div);
        }
        
        container.appendChild(row);
    }

    const divs = document.querySelectorAll(".gridSquare");

    divs.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor;
        });
    });
    
}

