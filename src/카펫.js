function solution(brown, yellow) {
  const size = brown + yellow;
  const answer = getPairs(size).find(pair => (pair[0] + pair[1]) * 2 - 4 === brown);
  
  return answer;
}

function getPairs(size) {
  const result = [];
  
  for (let i = 1; i < Math.floor(size / 2); i++) {
      if (!(size % i)) result.push([size / i, i]);
  }
  
  return result;
}
