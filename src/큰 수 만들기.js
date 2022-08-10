function solution(number, k) {
  const stack = [];
  let count = 0;
  
  for (let i = 0; i < number.length; i++) {
      while (stack.length && count < k && number[i] > stack[stack.length - 1]) {
          stack.pop();
          count++;
      }
      
      if (stack.length < number.length - k) {
          stack.push(number[i]);
      }
  }
  
  return stack.join("")
}

// function solution(number, k) {
//   number = number.split("");
  
//   const results = getCombinations(number, number.length - k).map(v => v.join(""));
  
//   return Math.max(...results).toString();
// }

// function getCombinations(arr, nums) {
//   if (nums === 1) return arr.map(v => [v]);
  
//   const results = [];
  
//   arr.forEach((fixed, index, origin) => {
//       const rest = origin.slice(index + 1);
//       const combinations = getCombinations(rest, nums - 1);
//       const attached = combinations.map(v => [fixed, ...v]);
      
//       results.push(...attached);
//   });
  
//   return results;
// }
