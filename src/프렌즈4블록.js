function solution(m, n, board) {
  let removedBlocksCount = 0;
  board.map((column) => column.split(""));
  const boardForRemoving = board;

  while (true) {
    const removedBlocks = [];

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          board[i][j] &&
          board[i - 1][j - 1] === board[i][j] &&
          board[i - 1][j] === board[i][j] &&
          board[i][j - 1] === board[i][j]
        ) {
          removedBlocksCount += 4;
          boardForRemoving[i - 1][j - 1] = 0;
          boardForRemoving[i - 1][j] = 0;
          boardForRemoving[i][j - 1] = 0;
          boardForRemoving[i][j] = 0;
          removedBlocks.push(board[i][j]);
        }
      }
    }

    if (!removedBlocks.length) break;

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (!boardForRemoving[i + 1][j]) {
          const temp = boardForRemoving[i][j];
          boardForRemoving[i][j] = 0;
          boardForRemoving[i + 1][j] = temp;
        }
      }
    }
  }

  return removedBlocksCount;
}
