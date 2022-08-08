function solution(m, n, board) {
  const targetArray = [];
  const array = board.map((item) => item.split(""));

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      const targetBlock = array[i][j];

      if (
          targetBlock &&
          targetBlock === array[i + 1][j] &&
          targetBlock === array[i][j + 1] &&
          targetBlock === array[i + 1][j + 1]
        ) {
        targetArray.push([i, j]);
      }
    }
  }
}
