function solution(s) {
  let unitSize = 1;

  while (unitSize < s.length) {
    const unitArr = s.match(new RegExp(`.{1,${unitSize}}`, "g"));
    let compressedStr = "";

    let i = 0;
    while (i < unitArr.length) {
      const count = unitArr
        .slice(i + 1)
        .filter((element) => unitArr[i] === element).length;

      if (count === 0) {
        compressedStr += unitArr[i];
        i++;
        continue;
      }

      compressedStr += count;
      compressedStr += unitArr[i];

      i = count + 1;
    }

    unitSize++;
  }
}
