function solution(brown, yellow) {
  let rowSize = 1;
  while (rowSize <= yellow) {
    const colSize = yellow / rowSize;

    if (rowSize < colSize) {
      rowSize++;
      continue;
    }

    if (2 * rowSize + 2 * colSize + 4 === brown)
      return [rowSize + 2, colSize + 2];

    rowSize++;
  }
}
