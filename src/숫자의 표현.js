function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (findCases(0, i, n)) count++;
  }

  return count;
}

function findCases(acc, cur, n) {
  if (acc === n) return true;
  if (acc > n) return false;

  return findCases(acc + cur, cur + 1, n);
}
