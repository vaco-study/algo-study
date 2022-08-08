function solution(m, n, board) {
  debugger;
  const totalBlocks = m * n;
  const comparison = [];

  for (let i = 0; i < m; i++) {
    const column = [];
    let left = false;
    let right = false;
    let down = false;

    for (let j = 0; j < n; j++) {
      if (board[i][j] === board[i]?.[j - 1]) {
        left = true;
      }

      if (board[i][j] === board[i][j + 1]) {
        right = true;
      }

      if (board[i][j] === board[i + 1]?.[j]) {
        down = true;
      }

      column.push({ left, right, down });

      left = false;
      right = false;
      down = false;
    }

    comparison.push(column);
  }

  return comparison;
}
