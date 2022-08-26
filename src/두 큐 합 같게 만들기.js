function solution(queue1, queue2) {
  let count = 0;
  let sumQ1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sumQ2 = queue2.reduce((acc, cur) => acc + cur, 0);
  let pointer1 = 0;
  let pointer2 = queue1.length;

  const target = (sumQ1 + sumQ2) / 2;
  const queue = [...queue1, ...queue2];
  const end = queue1.length * 3;

  while (count < end) {
    if (sumQ1 === target) return count;

    if (sumQ1 > target) {
      sumQ1 -= queue[pointer1];
      pointer1++;
      count++;
    } else {
      sumQ1 += queue[pointer2];
      pointer2++;
      count++;
    }
  }

  return -1;
}
