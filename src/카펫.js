function solution(brown, yellow) {
  const allCarpets = brown + yellow;

  for (let column = 3; column <= brown; column++) {
    if (allCarpets % column === 0) {
      const row = allCarpets / column;

      if ((row - 2) * (column - 2) === yellow) {
        return [row, column];
      }
    }
  }
}
