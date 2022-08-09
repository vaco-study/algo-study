function solution(str1, str2) {
  let answer = 0;
  const convertedString1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  const convertedString2 = str2.toLowerCase().replace(/[^a-z]/g, "");
  const arr1 = [];
  const arr2 = [];
  let i = 0;
  let j = i + 1;

  while (j < convertedString1.length) {
    arr1.push(convertedString1[i] + convertedString1[j]);
    i++;
    j++;
  }

  i = 0;
  j = i + 1;

  while (j < convertedString2.length) {
    arr2.push(convertedString2[i] + convertedString2[j]);
    i++;
    j++;
  }

  const union = [...new Set([...arr1, ...arr2])];
  const intersection = arr1.filter((it) => arr2.includes(it));

  answer = parseInt((intersection.length / union.length) * 65536);

  return answer;
}
