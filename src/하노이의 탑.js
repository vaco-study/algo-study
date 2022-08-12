function solution(n) {
  var answer = [];

  hanoi(n, 1, 3, 2);

  function move(n, start, to) {
    answer.push([start, to]);
  }

  function hanoi(n, start, to, via) {
    if (n === 1) {
      move(1, start, to);
    } else {
      hanoi(n - 1, start, via, to);
      move(n, start, to);
      hanoi(n - 1, via, to, start);
    }
  }

  return answer;
}
