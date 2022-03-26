function mazeRunner(maze, directions) {
    // Code here
    let width=maze.length;
    let startPosition;
    let row=0;
    for(let arr of maze){
        if(arr.find(i=>i===2)){
            startPosition=arr.find(i=>i===2);
            break;
        }
        row++;  
    }
    console.log(width);
    console.log(startPosition);
    console.log(row);
  }

  var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]);