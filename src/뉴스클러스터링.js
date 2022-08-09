function solution(str1, str2) {
  const intersection = [];
  const union = [];

  const multiSets = (str, arr = []) => {
    for (let i = 0; i < str.length - 1; i++) {
      const sliceStr = str.slice(i, i + 2).toLowerCase();

      if (/^[a-zA-Z]+$/g.test(sliceStr)) {
        arr.push(sliceStr);
      }
    }

    return arr;
  }

  const multiSet1 = multiSets(str1);
  const multiSet2 = multiSets(str2);

  for (let i = 0; i < multiSet2.length; i++) {
    if (multiSet1.indexOf(multiSet2[i]) >= 0) {
      intersection.push(multiSet1.splice(multiSet1.indexOf(multiSet2[i]), 1));
    }

    union.push(multiSet2[i]);
  }

  for (let i = 0; i < multiSet1.length; i++) {
    union.push(multiSet1[i]);
  }

  if (union.length === 0) {
    return 65536;
  }

  return Math.floor(intersection.length / union.length * 65536);
}
