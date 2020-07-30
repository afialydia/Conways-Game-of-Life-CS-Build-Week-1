import React, {useState} from 'react'

export const makeGrid = (height, width, makeRandom = false) => {
    let grid = [];
      for (var i = 0; i < height; i++){
        var row = [];
        for (var j = 0; j < width; j++){
          let value;
          if (makeRandom){
            value = Math.random() > 0.55; //generates connections how full it is etc
          }
          row.push({
            status: value,
            newBorn: value
          });
        }
        grid.push(row);
      }
      return grid;
  };
  
  export const advanceGrid = function(grid = []){
       let gridHeight = grid.length;
       let gridWidth = grid[0].length;
  
       let calculateNeighbours = function(x,y) {
         //creationg the box for our values to live. each turnary is helping to determine which is absolute last part of grid?
         let topRow = x-1 < 0 ? (gridHeight - 1) : x-1;
         let bottomRow = (x+1 === gridHeight) ? 0 : x+1;
         let leftColumn = y-1 < 0 ? (gridWidth - 1) : y-1;
         let rightColumn = (y+1 === gridWidth) ? 0 : y+1;
  
         let total = 0; //to keep track of amount of connections.checking surrounding areas for neighbots like a hashtag # we check the center cell for surroundings
         total+= grid[topRow][leftColumn].status;
         total+= grid[topRow][y].status;
         total+= grid[topRow][rightColumn].status;
         total+= grid[x][leftColumn].status;
         total+= grid[x][rightColumn].status;
         total+= grid[bottomRow][leftColumn].status;
         total+= grid[bottomRow][y].status;
         total+= grid[bottomRow][rightColumn].status;
  
         return total;
       };
       
       let gameState = [];
       for (let i = 0; i < gridHeight; i++) {
         let row = [];
         for (let j = 0; j < gridWidth; j++) {
           let cellIsAlive = grid[i][j].status; //hashtag status if x,y is alive it checks neighbors
           let neighbours = calculateNeighbours(i,j); //checking place on grid to see if there are neighbors. i is horizontal j is vertical
             if (cellIsAlive) { //determining whether things will die or stay living, but creating new life.
                  if (neighbours < 2) {
                      row.push({ status: 0 }); //underpopulation cell dies.
                  } else if (neighbours > 3){
                      row.push({ status: 0 }); //overpopulation cell dies.
                  } else {
                      row.push({ status: 1 }); //two exact or "else" they spawn a new cell
                  }
              }
              if (!cellIsAlive) { //creating new life if cell has 3 neighbors. giving attribute of new born
                  if (neighbours === 3) {
                  row.push({
                    status: 1,
                    newBorn: true
                  });
              } else { //possibly don't need this but 
                  row.push({ status: 0 });
                  }
              }
       }
       gameState.push(row);
     }
     return gameState;
   };