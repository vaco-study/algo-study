function solution(m, n, board) {
  const matrix = board.map((column) => column.split(""));
  const offset = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  let count = 0;
  let flag = true;

  while (flag) {
    flag = false;
    const removedIndex = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const column = [
          matrix[i][j],
          matrix[i][j + 1],
          matrix[i + 1][j],
          matrix[i + 1][j + 1],
        ];

        const isSameValue = column.every((value) => value === column[0]);

        if (column[0] && isSameValue) {
          offset.forEach(([dx, dy]) => {
            removedIndex.push([dx + i, dy + j]);
            flag = true;
          });
        }
      }
    }

    removedIndex.forEach(([i, j]) => {
      const coordinate = matrix[i][j];

      if (coordinate) {
        matrix[i][j] = "";
        count++;
      }
    });

    for (let i = 0; i < n; i++) {
      const stack = [];

      for (let j = 0; j < m; j++) {
        if (matrix[j][i]) {
          stack.push(matrix[j][i]);
        }
      }

      for (let j = m - 1; j >= 0; j--) {
        if (stack.length) {
          matrix[j][i] = stack.pop();
        } else {
          matrix[j][i] = "";
        }
      }
    }
  }

  return count;
}
