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

// function solution(s) {
//   const compressedStrArr = [];
//   let unitSize = 1;

//   while (unitSize < s.length / 2 + 1) {
//     let cnt = 1;
//     let compressedStr = "";

//     for (let i = 0; i < s.length; i += unitSize) {
//       const current = s.substr(i, unitSize);
//       const next = s.substr(unitSize + i, unitSize);

//       if (current === next) {
//         cnt++;
//         continue;
//       }

//       compressedStr =
//         cnt > 1 ? compressedStr + cnt + current : compressedStr + current;
//       cnt = 1;
//     }

//     compressedStrArr.push(compressedStr.length);
//     unitSize++;
//   }

//   return Math.min(...compressedStrArr);
// }
