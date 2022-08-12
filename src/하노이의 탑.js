function solution(n) {
  const first = Array.from({ length: n }, (v, i) => i + 1);
  const second = [];
  const third = [];
  const result = [];

  while (third.length !== n) {
    if (!third.length) {
      third.unshift(first.shift());
      result.push([1, 3]);
    }

    if (first[0] > third[0]) {
      second.unshift(first.shift());
      result.push([1, 2]);
    }

    if (first[0] > second[0] && first[0] > third[0]) {
      while (third.length) {
        second.unshift(third.shift());
        result.push([3, 2]);
      }
    }

    if (!first.length) {
      while (third[0] < second[0]) {
        third.unshift(second.shift());
        result.push([2, 3]);
      }

      while (second.length && second.length !== 1) {
        first.unshift(second.shift());
        result.push([2, 1]);
      }
    } else {
      if (!second.length) {
        third.unshift(first.shift());
        result.push([1, 3]);
      }

      while (second.length && second.length !== 1) {
        first.unshift(second.shift());
        result.push([2, 1]);
      }
    }
  }

  return result;
}
