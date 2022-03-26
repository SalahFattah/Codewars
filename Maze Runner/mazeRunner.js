function mazeRunner(maze, directions) {
    // Code here
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
    let result;
        for(let i of directions){
            switch(i){
                case "N":
                    rowIndex--;
                    currentRow=maze[rowIndex];
                    if(currentRow===undefined||currentRow[currentPosition]===1){
                        // console.log("safe");
                        result="Dead";
                    }else if(currentRow[currentPosition]===3){
                        result="Finish";
                        // console.log("finish");
                    }else{
                        // console.log("safe");
                        result="Lost";
                    }
                    
                    // console.log(currentPosition);
                    
                    break;
                case "S":
                    rowIndex++;
                    currentRow=maze[rowIndex];
                    
                    if(currentRow===undefined || currentRow[currentPosition]===1){
                        result="Dead";
                    }else if(currentRow[currentPosition]===3){
                        result="Finish";
                    }else{
                        result="Lost";
                    }
                        
                    break;
                case "E":
                    currentPosition++;
                    
                    if(currentRow[currentPosition]===1 || currentRow[currentPosition]===undefined){
                        result="Dead";
                    }else if(currentRow[currentPosition]===3){
                        result="Finish";
                    }else{
                        result="Lost";
                    }
                    
                    
                    // console.log(currentPosition);
                    
                    break;
                case "W":
                    // currentPosition--;
                    
                    if(currentRow[currentPosition]===1 || currentRow[currentPosition]===undefined){
                        result="Dead";
                    }else if(currentRow[currentPosition]===3){
                        result="Finish";
                    }else{
                        result="Lost";
                    }
                    
                    // console.log(currentPosition);
                    
                    break;
            }
        }
        
return result;

  }

  var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]));