function solution(s) {
  const length = Math.floor(s.length / 2);
  let count = 0;
  let compressedString = "";
  let max = s.length;
  let i = 1;
  let j = 0;

  while (i <= length) {
    const stack = [];
    let index = i;

    while (j < s.length) {
      const str = s.substring(j, index);
      index += i;
      j += i;

      if (stack.length === 0) {
        stack.push(str);
        continue;
      }

      if (str === stack[stack.length - 1]) {
        count++;
      } else {
        count++;
        count === 1
          ? (compressedString += stack.pop())
          : (compressedString += `${count}${stack.pop()}`);

        stack.push(str);
        count = 0;
      }
    }

    count++;
    count === 1
      ? (compressedString += stack.pop())
      : (compressedString += `${count}${stack.pop()}`);

    max = Math.min(max, compressedString.length);
    count = 0;
    i++;
    j = 0;
    compressedString = "";
  }

  return max;
}
