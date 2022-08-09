function solution(str1, str2) {
  const chunksFromStr1 = splitStringByTwo(str1);
  const chunksFromStr2 = splitStringByTwo(str2);

  const allChunks = [...new Set([...chunksFromStr1, ...chunksFromStr2])];
  const sameChunks = [
    ...new Set([
      ...chunksFromStr1.filter((chunk) => chunksFromStr2.includes(chunk)),
    ]),
  ];

  if (sameChunks.length === allChunks.length) return 65536;
  return Math.floor((sameChunks.length / allChunks.length) * 65536);
}

function splitStringByTwo(str) {
  const result = [];
  const strArr = [...str];

  for (let i = 0; i < strArr.length - 1; i++) {
    const isUpperCase =
      strArr[i].charCodeAt() >= 65 && strArr[i].charCodeAt() <= 90;

    const isSmallCase =
      strArr[i].charCodeAt() >= 97 && strArr[i].charCodeAt() <= 122;

    const nextIsUpperCase =
      strArr[i + 1].charCodeAt() >= 65 && strArr[i + 1].charCodeAt() <= 90;

    const nextIsSmallCase =
      strArr[i + 1].charCodeAt() >= 97 && strArr[i + 1].charCodeAt() <= 122;

    if ((isUpperCase || isSmallCase) && (nextIsUpperCase || nextIsSmallCase)) {
      const chunk = strArr[i].toLowerCase() + strArr[i + 1].toLowerCase();
      result.push(chunk);
    }
  }

  return result.sort((a, b) => a - b);
}
