function solution(number, k) {
  const numToString = number + "";
  const newDigit = numToString.length - k;
  const permutation = getPermutation(numToString, newDigit);

  return permutation.sort((a, b) => parseInt(b) - parseInt(a))[0];
}

function getPermutation(string, k) {
  const numToArr = string.split("");
  const set = [];

  if (k === 1) return numToArr;

  numToArr.forEach((fixed, index, newArr) => {
    const restArr = numToArr.slice(index + 1);
    const combination = getPermutation(restArr.join(""), k - 1);
    const newValue = combination.map((value) => fixed + value);

    set.push(...newValue);
  });

  return set;
}
