function mazeRunner(maze, directions) {
    // Code here
    let startPosition;
    let startRow;
    let currentPosition;
    let currentRow;
    for(let arr of maze){
        for (let i=0;i<arr.length;i++){
            if(arr[i]===2){
                startPosition=i;
                startRow=maze.indexOf(arr);
            }
        }
    }
    currentPosition=startPosition;
    currentRow=maze[startRow];
    let result;
        for(let i of directions){
            switch(i){
                case "N":
                    startRow--;
                    currentRow=maze[startRow];
                    if(currentRow===undefined||currentRow[currentPosition]===1){
                        result="Dead";
                    }else if(currentRow[currentPosition]===3){
                        result="Finish";
                    }else{
                        result="Lost";
                    }
                    
                    break;
                case "S":
                    startRow++;
                    currentRow=maze[startRow];
                    
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
                    
                    break;
                case "W":
                    currentPosition--;
                    
                    if(currentRow[currentPosition]===1 || currentRow[currentPosition]===undefined){
                        result="Dead";
                    }else if(currentRow[currentPosition]===3){
                        result="Finish";
                       
                    }else{
                        result="Lost";
                    }
                    
                    break;
            }
            if(result==="Finish"){
                return result;
            }else if(result==="Dead"){
                return result;
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
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]));