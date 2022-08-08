function solution(m, n, board) {
  const splitedBoard = board.map((element) => element.split(""));

  while (true) {
    const removedItems = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const curCharacter = splitedBoard[i][j];
        const [a, b, c] = [
          splitedBoard[i + 1][j],
          splitedBoard[i][j + 1],
          splitedBoard[i + 1][j + 1],
        ];

        if (
          curCharacter &&
          curCharacter === a &&
          curCharacter === b &&
          curCharacter === c
        )
          removedItems.push([i, j]);
      }
    }

    if (!removedItems.length)
      return splitedBoard.reduce(
        (acc, cur) => (acc += cur.filter((value) => !value).length),
        0
      );

    removedItems.forEach((element) => {
      const [i, j] = element;
      splitedBoard[i][j] = 0;
      splitedBoard[i + 1][j] = 0;
      splitedBoard[i][j + 1] = 0;
      splitedBoard[i + 1][j + 1] = 0;
    });

    for (let i = m - 1; i > 0; i--) {
      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !splitedBoard[i][j]; k--) {
          if (splitedBoard[k][j]) {
            [splitedBoard[i][j], splitedBoard[k][j]] = [splitedBoard[k][j], 0];

            break;
          }
        }
      }
    }
  }
}
