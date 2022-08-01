function solution(s) {
  const countArr = [];
  
  for (let i = 1; i < s.length; i++) {
      let count = 0;
      let answer = "";
      
      for (let j = 0; j < s.length; j += i) {
      const curr = s.substr(0, i);
      const next = s.substr(i + j, i);
      
      if (s.indexOf(curr) === -1) {
          return s.length;
      }
      
      if (curr === next) {
          count++;
      } else {
        // 이 부분의 로직을 잘 모르겠습니다.
      }
      
      countArr.push(answer.length);
    }
  }
  
  return s.length;
}