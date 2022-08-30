function solution(n) {
  let counter = 0;
  const 수열의합 = n;
  let 초항;
  let 최근연산의마지막항의개수 = n;

  for (let i = 1; i <= n; i++) {
    초항 = i;

    for (let 항의개수 = 1; 항의개수 <= 최근연산의마지막항의개수; 항의개수++) {
      if (2 * 수열의합 === 항의개수 * (2 * 초항 + 항의개수 - 1)) {
        최근연산의마지막항의개수 = 항의개수;
        counter++;
        break;
      }
    }
  }

  return counter;
}
