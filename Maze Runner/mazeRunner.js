function mazeRunner(maze, directions) {
    // Code here
    let width=maze.length;
    let startPosition;
    let finishPosition;
    let startRow=0;
    let finishRow=0;
    let currentPosition;
    let currentRow;
    for(let arr of maze){
        for (let i=0;i<arr.length;i++){
            if(arr[i]===2){
                startPosition=i;
                startRow=maze.indexOf(arr);
            }else if(arr[i]===3){
                finishPosition=i;
                finishRow=maze.indexOf(arr);

            }
        }
    }
    currentPosition=startPosition;
    currentRow=maze[startRow];
    let rowIndex=startRow;
    // console.log(currentPosition);
    // console.log(currentRow)
    while(true){
        for(let i of directions){
            switch(i){
                case "N":
                    rowIndex--;
                    currentRow=maze[rowIndex];
                    
                    if(currentRow[startPosition]===0){
                        console.log("safe");
                    }else if(currentRow[startPosition]===3){
                        console.log("finish");
                    }else{
                        console.log("dead");
                    }
                    
                    // console.log(currentPosition);
                    
                    break;
                case "S":
                    rowIndex++;
                    currentRow=maze[rowIndex];
                    
                    if(currentRow[startPosition]===0){
                        console.log("safe");
                    }else if(currentRow[startPosition]===3){
                        console.log("finish");
                    }else{
                        console.log("dead");
                    }
                        
                        break;
                case "E":
                    currentPosition++;
                    if(currentRow[currentPosition]===0){
                        console.log("safe");
                    }else if(currentRow[currentPosition]===3){
                        console.log("finish");
                    }else{
                        console.log("dead");
                    }
                    
                    
                    // console.log(currentPosition);
                    
                    break;
                case "W":
                    currentPosition--;
                    if(currentRow[currentPosition]===0){
                        console.log("safe");
                    }else if(currentRow[currentPosition]===3){
                        console.log("finish");
                    }else{
                        console.log("dead");
                    }
                    
                    // console.log(currentPosition);
                    
                    break;
            }
        }
        break;
    }


    // console.log(width);
    // console.log(startPosition);
    // console.log(finishPosition);
    // console.log(finishRow);
    // console.log(startRow);
  }

  var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]);