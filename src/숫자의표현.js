function solution(n) {
  let counter = 0;

  const sequenceSum = n;
  let first;
  let possibleLength;
  let lastPossibleLength = n;

  for (let i = 1; i <= n; i++) {
    first = i;

    for (let j = 1; j <= lastPossibleLength; j++) {
      if (2 * sequenceSum === j * (2 * first + j - 1)) {
        counter++;
        lastPossibleLength = j;
        break;
      }
    }
  }

  return counter;
}
