function solution(m, n, board) {
  board = board.map((row) => row.split(""));

  for (let i = 0; i < board.length; i++) {
    let j = 0;
    let k = i + 1;

    while (j < board[i].length - 1) {
      if (board[i][j] === board[i][k]) {
        if (board[i][j] === board[i + 1][j] && board[i][j] === board[i + 1][k]) {
          k++;
        }
      } else {
        board[i][j] === "";
        board[i][k - 1] === "";

        board[i + 1][j] === "";
        board[i + 1][k - 1] === "";

        j = k;
      }
    }
  }
}
