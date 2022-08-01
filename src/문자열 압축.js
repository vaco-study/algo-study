function solution(s) {
  if (s.length <= 2) {
    return s.length;
  }

  for (let i = parseInt(s.length / 2); i >= 1; i = parseInt(i / 2)) {
    let resultString = "";
    let counter = 0;

    for (let j = i; j < s.length; j += i) {
      const unitString = s.slice(0, j);

      if (unitString !== s.slice(j, j + i)) {
        counter = 0;
        continue;
      }

      counter++;
    }
  }

  return s.length;
}
