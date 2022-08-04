function solution(people, limit) {
  let result = 0;
  let left = 0;
  let right = people.length - 1;

  people.sort((a, b) => b - a);

  while(left < right) {
    let sum = people[left] + people[right];
    result++;

    if(sum > limit){
      left++;
    } else {
      left++;
      right--;
    }
  }

  if(left === right) {
    result++;
  }

  return result;
}
