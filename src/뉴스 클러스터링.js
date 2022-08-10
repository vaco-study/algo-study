function solution(str1, str2) {
  const chunksFromStr1 = splitStringByTwo(str1);
  const chunksFromStr2 = splitStringByTwo(str2);

  let intersectionSize = 0;
  let unionSize = 0;

  const allUniqueSameChunks = [
    ...new Set([
      ...chunksFromStr1.filter((chunk) => chunksFromStr2.includes(chunk)),
    ]),
  ];

  const allUniqueChunks = [
    ...new Set([...new Set(chunksFromStr1), ...new Set(chunksFromStr2)]),
  ];

  allUniqueSameChunks.forEach((chunk) => {
    intersectionSize += Math.min(
      chunksFromStr1.filter((c) => c === chunk).length,
      chunksFromStr2.filter((c) => c === chunk).length
    );
  });

  allUniqueChunks.forEach((chunk) => {
    intersectionSize += Math.max(
      chunksFromStr1.filter((c) => c === chunk).length,
      chunksFromStr2.filter((c) => c === chunk).length
    );
  });

  if (intersectionSize === unionSize) return 65536;
  return Math.floor((intersectionSize / unionSize) * 65536);
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
