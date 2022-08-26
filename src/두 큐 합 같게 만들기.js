function solution(queue1, queue2) {
  let count = 0;
  const queue1Sum = queue1.reduce((acc, cur) => acc + cur, 0);
  const queue2Sum = queue2.reduce((acc, cur) => acc + cur, 0);

  const helper = (q1, q2, q1Sum, q2Sum) => {
    if (!q1.length || !q2.length) {
      count = -1;
      return;
    }

    if (q1Sum === q2Sum) return;

    if (q1Sum > q2Sum) {
      q1Sum -= q1[0];
      q2Sum += q1[0];
      q2.push(q1.shift());
      count++;
      helper(q1, q2, q1Sum, q2Sum);
    } else {
      q2Sum -= q2[0];
      q1Sum += q2[0];
      q1.push(q2.shift());
      count++;
      helper(q1, q2, q1Sum, q2Sum);
    }
  };

  helper(queue1, queue2, queue1Sum, queue2Sum);

  return count;
}
