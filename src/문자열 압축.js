function solution(s) {
  let answer = Infinity;
  
  for (let i = 1; i < s.length / 2 + 1; i++) {
      answer = Math.min(answer, checker(s, i).length);
  }
  
  return answer;
}

function checker(s, n) {
  const splitted = [];
  let answer = "";
  
  s = s.split("");
  
  while (s.length) {
      const removed = s.splice(0, n);
      
      let removedString = "";
      
      removed.map((str) => removedString += str);
      
      splitted.push(removedString);
  }
  
  for (let i = 0; i < splitted.length; i++) {
      const standard = splitted[i];
      let count = 1;
      
      while (true) {
          if (standard === splitted[i + 1]) {
              count++;
              i++;
          } else {
              break;
          }
      }
      
      if (count !== 1) {
          answer += count + standard;
      } else {
          answer += standard
      }
  }
  
  return answer;
}
