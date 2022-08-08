function solution(m, n, board) {
  board = board.map((v) => v.split(""));

  const willBeExploded = [];

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (
        board[i][j] &&
        board[i][j] === board[i][j + 1] &&
        board[i][j] === board[i + 1][j] &&
        board[i][j] === board[i + 1][j + 1]
      ) {
        willBeExploded.push([i, j]);
      }
    }
  }

  for (let i = 0; i < willBeExploded.length; i++) {
    const col = willBeExploded[i][0];
    const row = willBeExploded[i][1];

    board[col][row] = "0";
    board[col][row + 1] = "0";
    board[col + 1][row] = "0";
    board[col + 1][row + 1] = "0";
  }
}
