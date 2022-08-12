const solution = (n) => {
  const answer = [];

  const hanoi = (num, start, middle, end) => {
    if (num === 1) {
      answer.push([start, end]);

      return;
    }

    hanoi(num - 1, start, end, middle);
    answer.push([start, end]);
    hanoi(num - 1, middle, start, end);
  };

  hanoi(n, 1, 2, 3);

  return answer;
};
