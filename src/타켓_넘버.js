function solution(numbers, target) {
  const NUMBER_OF_CASES = Math.pow(2, numbers.length);
  let numberOfWays = 0;
  
  for (let i = 0; i < NUMBER_OF_CASES; i++) {
    const signInBinary = i.toString(2).padStart(numbers.length, 0);
    let equation = ""
    
    for (let j = 0; j < numbers.length; j++) {
      let sign = parseInt(signInBinary[j]);
      const number = numbers[j];
      
      sign ? sign = "+" : sign = "-";
      equation += sign + number;
    }

    if (eval(equation) === target) numberOfWays++;
  }
      
  return numberOfWays;
}