function mazeRunner(maze, directions) {
    // Code here
    let width=maze.length;
    let startPosition;
    let finishPosition;
    let startRow=0;
    let finishRow=0;
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
    // console.log(width);
    console.log(startPosition);
    console.log(finishPosition);
    console.log(finishRow);
    console.log(startRow);
  }

  var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]);