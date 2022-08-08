function solution(m, n, board) {
  const matrix = board.map((str) => str.split(""));
  let removingCounter = 0;

  for (let i = 1; i < m; i++) {
    const prevLine = matrix[i - 1];
    let sameCounter = 0;

    for (let j = 0; j < n; j++) {
      if (prevLine[j] === matrix[i][j]) {
        sameCounter++;
        continue;
      }

      if (sameCounter > 4) {
        removingCounter += sameCounter;
      }
    }
  }

  return removingCounter;
}
