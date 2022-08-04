function solution(people, limit) {
  let answer = 0;
  people = people.filter((person) => {
      if (limit - person > 40) return people;
      else answer++;
  }).sort((a, b) => b - a);
  
  const allCases = getAllCombi(people);
  let min = Infinity;
  
  return answer;
}

function getCombi(arr, num) {
  const results = [];
  
  if (num === 1) return arr.map((v) => [v]);
  
  arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combi = getCombi(rest, num - 1);
      const attached = combi.map((v) => [fixed, ...v]);
      
      results.push(...attached);
  });
  
  return results;
}

function getAllCombi(arr) {
  const results = [];
  
  arr.forEach((v, index) => {
      results.push(getCombi(arr, index + 1));
  });
  
  return results;
}
