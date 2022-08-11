function solution(orders, courses) {
  const answer = [];
  
  orders = orders.map(v => v.split(""));
  
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    const results = {}
      
    orders.forEach((order, index) => {
      getCombis(order, course).forEach(v => {
        const result = v.sort().join("");
        
        results[result] ? results[result]++ : results[result] = 1;
      });
    });

    if (Object.keys(results).length < 2) continue;

    const max = Object.keys(results).reduce((a, b) => results[a] >= results[b] ? a : b, 0);

    if (results[max] < 2) continue;

    answer.push(max); 
    Object.keys(results).forEach(key => {
      if (key !== max && results[key] === results[max]) answer.push(key);   
    });
  }
  
  return answer.sort();
}

function getCombis(arr, nums) {
  if (nums === 1) return arr.map(v => [v]);
  
  const results = [];
  
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combis = getCombis(rest, nums - 1);
    const attached = combis.map(v => [fixed, ...v]);
    
    results.push(...attached);
  });
  
  return results;
}
