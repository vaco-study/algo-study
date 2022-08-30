function solution(n) {
  let numberOfWays = 0;
  
  for (let i = n; i >= 1; i--) {
      let iCopy = i;
      let currentNumber = n;
      
      while (currentNumber > 0) {
          currentNumber -= iCopy;
          
          if (iCopy > 0) iCopy--;
          else break;
      }
      
      if (currentNumber === 0) numberOfWays++;
  }
  
  return numberOfWays;
}
