function solution(queue1, queue2) {
  const answer = [];
  const queue1Sum = queue1.reduce((a, x) => a + x, 0);
  const queue2Sum = queue2.reduce((a, x) => a + x, 0);
  const targetSum = (queue1Sum + queue2Sum) / 2;
  if (queue1Sum === targetSum) return 0;

  if (queue1Sum > targetSum) {
    // 그냥빼서 처리하거나
    const justSubtractTarget = queue1.filter(
      (element) => queue1Sum - element === targetSum
    );
    if (justSubtractTarget.length > 0) {
      const findIndex = queue1.findIndex(
        (element) => queue1Sum - element === targetSum
      );
      if (findIndex >= 0) {
        answer.push(findIndex * 2);
      }
    }
    // 상대방과 트레이드하는 상황
    const difference = queue1Sum - targetSum;
    console.log(difference);

    // 두원소만 트레이드 해도 되는 상황
    // difference만큼 차이나는 원소가 있는지?
    // 없다면 합산해서 옮겨야 함
  } else {
    // 그냥빼서 처리하는 경우
    const justSubtractTarget = queue2.filter(
      (element) => queue2Sum - element === targetSum
    );
    if (justSubtractTarget.length > 0) {
      const findIndex = queue2.findIndex(
        (element) => queue1Sum - element === targetSum
      );
      if (findIndex >= 0) {
        answer.push(findIndex * 2);
      }
    }
    // 상대방과 트레이드하는 상황
    const difference = queue2Sum - targetSum;
    console.log(difference);
  }

  return answer.length > 0 ? answer.sort((a, b) => a - b)[0] : -1;

  function moveQ1ToQ2() {
    const target = queue1.shift();
    queue2.push(target);
  }

  function moveQ2ToQ1() {
    const target = queue2.shift();
    queue1.push(target);
  }
}
