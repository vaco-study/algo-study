function solution(string) {
  let unit = 2;
  let compressedString = string;
  let start = 0;
  const subArrays = [];

  for (let i = 0; i < string.length; i += unit) {
    const subString = string.substring(i, i + unit);

    subArrays.push(subString);
  }

  while (start < subArrays.length) {
    let currString = subArrays[start];
    let times = 1;

    for (let i = start; i < subArrays.length; i++) {
      if (currString === subArrays[i]) {
        times++;

        continue;
      }

      if (i === 0) break;

      compressedString += times + currString;

      break;
    }

    start = times;
  }
}
