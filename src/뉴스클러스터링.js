function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  const str1Arr = [];
  const str2Arr = [];

  [...str1].forEach((_, index) =>
    str1[index] >= "A" &&
    str1[index] <= "Z" &&
    str1[index + 1] >= "A" &&
    str1[index + 1] <= "Z"
      ? str1Arr.push(str1[index] + str1[index + 1])
      : null
  );

  [...str2].forEach((_, index) =>
    str2[index] >= "A" &&
    str2[index] <= "Z" &&
    str2[index + 1] >= "A" &&
    str2[index + 1] <= "Z"
      ? str2Arr.push(str2[index] + str2[index + 1])
      : null
  );

  const intersection = str1Arr.filter((elem) => str2Arr.includes(elem));
  const sumArr = [...new Set([...str1Arr, ...str2Arr])];

  return Math.floor((intersection.length / sumArr.length) * 65536);
}
