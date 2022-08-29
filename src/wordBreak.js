/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let result = false;
  const permutations = getPermutations(wordDict, wordDict.length);

  if (wordDict.length === 1 && s === wordDict[0]) return true;

  for (let i = 0; i < permutations.length; i++) {
    if (!result) {
      let copyS = s;
      const target = permutations[i];

      for (let j = 0; j < target.length; j++) {
        const comparisonTarget = target[j];
        const targetLength = comparisonTarget.length;
        const targetIndex = copyS.indexOf(comparisonTarget);
        if (targetIndex === 0) {
          copyS = copyS.slice(comparisonTarget.length);
          j--;
        } else if (targetIndex === copyS.length - targetLength) {
          copyS = copyS.slice(0, copyS.length - targetLength);
          j--;
        }
      }

      if (copyS.length === 0) {
        result = true;
      }
    } else {
      break;
    }
  }

  return result;
};

function getPermutations(arr, selectNumber) {
  const result = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, original) => {
    const rest = [...original.slice(0, index), ...original.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attachedArr = permutations.map((elm) => [fixed, ...elm]);
    result.push(...attachedArr);
  });

  return result;
}
