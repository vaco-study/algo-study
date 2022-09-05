function solution(queue1, queue2) {
  const maxCount = (queue1.length + queue2.length) * 2;
  let queue1Sum = queue1.reduce((acc, cur) => acc + cur, 0);
  let queue2Sum = queue2.reduce((acc, cur) => acc + cur, 0);
  let count = 0;
  let [queue1Copy, queue2Copy] = [queue1.slice(), queue2.slice()];

  while (count <= maxCount) {
    if (queue1Sum === queue2Sum) return count;

    if (queue1Sum > queue2Sum) {
      const tmp = queue1Copy.shift();
      queue2Copy.push(tmp);

      queue1Sum -= tmp;
      queue2Sum += tmp;
    } else {
      const tmp = queue2Copy.shift();
      queue1Copy.push(tmp);

      queue2Sum -= tmp;
      queue1Sum += tmp;
    }

    count++;
  }

  return -1;
}
