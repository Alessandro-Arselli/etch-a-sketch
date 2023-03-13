let gridContainer = document.getElementById('gridContainer');
let gridSize = 16;
let rowNum =1;
let rowContainer;

//make a function that creates a grid
function createGrid(size)
{   
    //maybe iterate through a loop and create 1 square(div) for for each time it runs.
    //have the loop assign an id to each row of a letter+number as in A1-A2-A3 etc..., letters for rows, numbers for columns    
    //Creates a row of divs based on the size specified and appends it to the html file.
    //use a forEach loop on the nodelist created for each rowContainer, and attach each gridbox to it.

    for(let i =1; i<=size; i++)
    {
        
        let rowContainer = document.createElement("div");
        

        
       // rowContainer.style.display = "flex";
        rowContainer.style.backgroundColor ='pink';
        //rowContainer.style.flexDirection = "column";
        rowContainer.setAttribute('id','row'+rowNum);
        rowContainer.classList.add('row');
        

        gridContainer.appendChild(rowContainer);

        rowNum++;
    };
    gridContainer.style.width = '100%';
    gridContainer.style.height = '100%';

    Array.from(gridContainer.children).forEach((node) =>
    {   
        for(let i =1; i<=gridSize; i++)
        {   let currentRow = node;
            let gridBox = document.createElement("div");
            
            
            gridBox.innerHTML ="Box";
            gridBox.style.backgroundColor ='lightblue'
            gridBox.classList.add("box"); 
            //gridBox.style.width = '100%';
            //gridBox.style.height = '100%';
            
    
            currentRow.appendChild(gridBox);
    
        };
    });
      
    };
   
    
   

createGrid(gridSize);

