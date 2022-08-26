function solution(queue1, queue2) {
  const sum = queue1.reduce((acc, cur) => acc + cur, 0) + queue2.reduce((acc, cur) => acc + cur, 0);
  
  if (sum % 2) return -1;
  
  const target = sum / 2;
  const sumArr = [...queue1, ...queue2];
  let left = 0;
  let right = 1;
  while (true) {
      const sum = sumArr.slice(left, right).reduce((acc, cur) => acc + cur, 0);
      
      if (sum < target) right++;
      if (sum > target) left++;
      if (sum === target) {
          console.log(left, right);
          break;
      }
  }
}
