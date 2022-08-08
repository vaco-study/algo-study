function solution(m, n, board) {
  let numberOfBlocksRemoved = 0;
  let prevElement = board[0][0];
  const letterToCoordinates = {};
  
  for (let i = 0; i < m; i++) {
    prevElement = board[i][0];
    
    for (let j = 1; j < n; j++) {
      const currentElement = board[i][j];
      
      if (prevElement === currentElement) {
        if (!(letterToCoordinates[currentElement])) {
          letterToCoordinates[currentElement] = [];    
        }
        
        if(j === 1) {
          letterToCoordinates[currentElement] = [[i, 0]];
        }
        letterToCoordinates[currentElement].push([i, j])
      }
      
      prevElement = currentElement;
    }
  }
  
  return numberOfBlocksRemoved;
}
