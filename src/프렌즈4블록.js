function solution(m, n, board) {
  const map = board.map(v => v.split(""));

  while(true) {
    const removed = [];
    
    for (let y = 0; y < m - 1; y++) {
      for (let x = 0; x < n - 1; x++) {
        const curPos = map[y][x];
        const [a, b, c] = [
          map[y][x + 1],
          map[y + 1][x],
          map[y + 1][x + 1],
        ];

        if (curPos &&
          curPos === a &&
          curPos === b &&
          curPos === c) {
            removed.push([y, x]);
          }
      }
    }

    if (!removed.length) {
      return map.reduce((acc, cur) => acc + cur.filter(v => !v).length, 0);
    }

    removed.forEach(v => {
      const [y, x] = v;

      map[y][x] = 0;
      map[y + 1][x] = 0;
      map[y][x + 1] = 0;
      map[y + 1][x + 1] = 0;
    });

    for (let y = m - 1; y > 0; y--) {
      for (let x = 0; x < n; x++) {
        for (let k = y - 1; k >= 0 && !map[y][x]; k--) {
          if (map[k][x]) {
            [map[y][x], map[k][x]] = [map[k][x], 0];
          }
        }
      }
    }
  }
}
