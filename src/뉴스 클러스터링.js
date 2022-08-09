function solution(str1, str2) {
  const a = maker(str1);
  const b = maker(str2);
  const HANDLING_NUM = 65536;
  const intersection = a.filter(v => b.includes(v));
  const union = [...new Set([...a, ...b])];

  if (!a.length && !b.length) return 1 * HANDLING_NUM;
  
  
}

function maker(str) {
  const result = [];
  
  for (let i = 0; i < str.length - 1; i++) {
      const splitted = str.charAt(i) + str.charAt(i + 1);
      
      if(splitted.match(/[A-Z]/gi) && splitted.match(/[A-Z]/gi).length === 2) result.push(splitted.toLowerCase());
  }
  
  return result;
}
