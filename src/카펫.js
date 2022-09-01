function solution(brown, yellow) {
  const divisors = [];

  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      divisors.push([i, yellow / i]);
    }
  }

  for (const divisor of divisors) {
    const carpetWidth = divisor[1] + 2;
    const carpetHeight = divisor[0] + 2;

    if (carpetWidth * 2 + carpetHeight * 2 - 4 === brown) {
      return [carpetWidth, carpetHeight];
    }
  }
}
