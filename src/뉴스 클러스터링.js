function solution(str1, str2) {
  const a = maker(str1);
  const b = maker(str2);
  const HANDLING_NUM = 65536;
  const union = [];
  const intersection = a.filter(v => {
      if (b.includes(v)) {
          union.push(v);
          return b.splice(b.indexOf(v), 1);
      }
      
      union.push(v);
  });

  b.forEach(v => union.push(v));
  
  
  return intersection.length === union.length ? HANDLING_NUM : Math.floor((intersection.length / union.length) * HANDLING_NUM);
}

function maker(str) {
  const result = [];
  
  for (let i = 0; i < str.length - 1; i++) {
      const splitted = str.charAt(i) + str.charAt(i + 1);
      
      if(splitted.match(/[A-Z]/gi) && splitted.match(/[A-Z]/gi).length === 2) result.push(splitted.toLowerCase());
  }
  
  return result;
}
