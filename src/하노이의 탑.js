function solution(n) {
  const answer = [];

  const hanoi = (num, start, to, via) => {
    if (num === 1) {
      answer.push([start, to]);
    } else {
      hanoi(num - 1, start, via, to);
      answer.push([start, to]);
      hanoi(num - 1, via, to, start);
    }
  };

  hanoi(n, 1, 3, 2);

  return answer;
}
