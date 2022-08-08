function solution(m, n, board) {
  const map = [];
  let answer = 0;
  
  for (let i = 0; i < board.length; i++) {
      map.push(board[i].split(""));
  }
  
  while(true) {
      let isWorking = false;
      
      for (let y = 0; y < m; y++) {
          for (let x = 0; x < n; x++) {
              if (map[y][x]) {
                  const result = bfs(y, x, map);
                  
                  if (result) isWorking = true;
              }
          }
      }
      
      if (!isWorking)break;
  }
  
  console.log(map);
  return answer;
}

function bfs(y, x, map) {
  const queue = [[y, x]];
  const moving = [[0, 1], [1, 0], [1, 1]];
  const dead = [];
  let count = 0;
  let isWorking = false;
  
  while(queue.length) {
      const [qy, qx] = queue.shift();
      
      for (let i = 0; i < moving.length; i++) {
          let [my, mx] = [qy + moving[i][0], qx + moving[i][1]];
          
          while (0 <= my && my < map.length && 0 <= mx && mx < map[0].length && map[my][mx] === 0) {
              my += moving[i][0];
              mx += moving[i][1];
          }
          
          if (0 <= my && my < map.length && 0 <= mx && mx < map[0].length) {
              if (map[qy][qx] === map[my][mx]) {
                  count++;
                  queue.push([my, mx]);
              }
          }
      }
      
      if (count !== 3) {
          count = 0;
          continue;
      }

      count = 0;
      dead.push([qy, qx]);
      queue.forEach((v) => {
          dead.push(v);
      });
  }
  
  if (dead.length) isWorking = true;
  
  dead.forEach((v) => {
      const [y, x] = v;
      
      map[y][x] = 0;
  });
  
  return isWorking;
}
