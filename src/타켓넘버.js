function solution(numbers, target) {
  const value = (numbers.reduce((acc, cur) => acc + cur, 0) - target) / 2;

  function recursive(target, index, count) {
    for (let i = index; i < numbers.length; i++) {
      let temp = target;
      temp -= numbers[i];

      if (temp === 0) count++;
      else if (temp > 0) count += recursive(temp, i + 1, 0);
      else if (temp < 0) continue;
    }

    return count;
  }

  return recursive(value, 0, 0);
  // let answer = 0;
  
  // function dfs(index, sum) {
  //     if (index === numbers.length) {
  //         if (sum === target) answer++;
          
  //         return;
  //     }
      
  //     dfs(index + 1, sum + numbers[index]);
  //     dfs(index + 1, sum - numbers[index]);
  // }
  
  // dfs(0, 0);
  
  // return answer;
}
