function solution(m, n, board) {
  board = board.map((row) => [...row]);

  while (true) {
    const found = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          found.push([i, j]);
        }
      }
    }

    if (!found.length) {
      return board.flat().filter((block) => !block).length;
    }

    for (let i = 0; i < found.length; i++) {
      const y = found[i][0];
      const x = found[i][1];

      board[y][x] = 0;
      board[y + 1][x] = 0;
      board[y][x + 1] = 0;
      board[y + 1][x + 1] = 0;
    }

    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some((block) => !block)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0; k--) {
          if (!board[i][j] && board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
}
