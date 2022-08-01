function solution(s) {
  const compressedLengthArr = [];
  
  while (unitSize < s.length / 2 + 1) {
    let count = 1;
    let compressedStr = "";

    for (let i = 0; i < s.length; i += unitSize) {
      const curr = s.substr(i, unitSize);
      const next = s.substr(unitSize + i, unitSize);

      if (current === next) {
        count++;
        continue;
      }

      compressedStr = count > 1 ? compressedStr + count + current : compressedStr + current;
      count = 1;
    }

    compressedLengthArr.push(compressedStr.length);
    unitSize++;
  }
  
  return Math.min(...compressedLengthArr);
}
