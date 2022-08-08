function solution(m, n, board) {
  var answer = 0;
  const newBoard = [];
  let targetBlock = [];
  const blockCounter = {};

  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].split(""));
  }

  console.log(newBoard);

  // 제거할 블록 체크
  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      if (
        newBoard[i][j] &&
        newBoard[i][j] === newBoard[i][j + 1] &&
        newBoard[i][j] === newBoard[i + 1][j] &&
        newBoard[i][j] === newBoard[i + 1][j + 1]
      ) {
        targetBlock.push([i, j]);
      }
    }
  }

  console.log(targetBlock);

  // block 제거
  targetBlock.forEach((element) => {
    newBoard[element[0]][element[1]] = null;
    newBoard[element[0] + 1][element[1]] = null;
    newBoard[element[0]][element[1] + 1] = null;
    newBoard[element[0] + 1][element[1] + 1] = null;
  });

  targetBlock = [];

  // block 이동
  for (let a = 0; a < m - 1; a++) {
    for (let i = 0; i < m - 2; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (newBoard[i][j] && newBoard[i + 1][j] === null) {
          newBoard[i + 1][j] = newBoard[i][j];
          newBoard[i][j] = null;
        }
      }
    }
  }

  // 제거할 블록 체크
  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      if (
        newBoard[i][j] &&
        newBoard[i][j] === newBoard[i][j + 1] &&
        newBoard[i][j] === newBoard[i + 1][j] &&
        newBoard[i][j] === newBoard[i + 1][j + 1]
      ) {
        targetBlock.push([i, j]);
      }
    }
  }

  // block 제거
  targetBlock.forEach((element) => {
    newBoard[element[0]][element[1]] = null;
    newBoard[element[0] + 1][element[1]] = null;
    newBoard[element[0]][element[1] + 1] = null;
    newBoard[element[0] + 1][element[1] + 1] = null;
  });

  targetBlock = [];

  // block 이동
  for (let a = 0; a < m - 1; a++) {
    for (let i = 0; i < m - 2; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (newBoard[i][j] && newBoard[i + 1][j] === null) {
          newBoard[i + 1][j] = newBoard[i][j];
          newBoard[i][j] = null;
        }
      }
    }
  }

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (newBoard[i][j] === null) {
        answer++;
      }
    }
  }

  return answer;
}
