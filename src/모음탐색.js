function solution(word) {
  let answer = 1;
  let start = "A";
  
  const order = {
      "A": "E",
      "E": "I",
      "I": "O",
      "O": "U",
      "U": "",
  };
  
  while(answer < 2000) {
      if (start === word) return answer;
      
      if (start.length === 5) {
          const plus = order[start[start.length - 1]];
          
          start = start.substring(0, start.length - 1) + plus;
          
          if (start.length < 5) {
              const plus = order[start[start.length - 1]];
          
              start = start.substring(0, start.length - 1) + plus;
          }
      } else {
          start += "A";
      }
      answer++;
  }
  return answer;
}
