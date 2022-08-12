function solution(n) {
  return hanoi(n, 1, 2, 3);
}

function hanoi(n, start, mid, last) {
  if (n === 1) {
    return [[start, last]];
  }

  return [
    ...hanoi(n - 1, start, last, mid),
    ...hanoi(1, start, mid, last),
    ...hanoi(n - 1, mid, start, last),
  ];
}
