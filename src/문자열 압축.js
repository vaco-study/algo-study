function solution(s) {
  let result = [];

  for (let i = 1; i < Math.ceil(s.length / 2) + 1; i++) {
    result.push([]);
    let count = 1;

    for (let j = 0; j < s.length; j++) {
      let left = s.substr(j * i, i);
      let right = s.substr((j * i) + i, i);

      if (left === right) {
        count++;
      } else {
        if (count > 1) {
          result[i - 1] += String(count) + left;
        } else {
          result[i - 1] += left;
        }

        count = 1;
      }
    }
  }

  let min = result[0].length;

  for (let i in result) {
    if (min > result[i].length) {
      min = result[i].length;
    }
  }

  return min;
}