function solution(queue1, queue2) {
  let counter1 = getCounter(queue1, queue2);
  let counter2 = getCounter(queue2, queue1);

  return Math.min(counter1, counter2) === -1
    ? Math.max(counter1, counter2)
    : Math.min(counter1, counter2);
}

function getCounter(queue1, queue2) {
  const originQueue1 = queue1.slice();
  const originQueue2 = queue2.slice();
  let counter = 0;

  do {
    queue1.push(queue2.shift());
    counter++;

    if (getSum(queue1) === getSum(queue2)) {
      return counter;
    }

    queue2.push(queue1.shift());
    counter++;

    if (getSum(queue1) === getSum(queue2)) {
      return counter;
    }
  } while (
    originQueue1.join("") === queue1.join("") &&
    originQueue2.join("") === queue2.join("")
  );

  return -1;
}

function getSum(queue) {
  return queue.reduce((prev, curr) => prev + curr);
}
