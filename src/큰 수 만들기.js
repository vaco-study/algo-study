function solution(number, k) {
  const strToArr = (number + "").split("");
  const newArr = strToArr.slice(0, strToArr.length - k);
  const max = Math.max(...newArr);
  const index = newArr.indexOf(max + "");
  const newNumber = strToArr.slice(index).join("");

  const permutation = getPermutation(newNumber, strToArr.length - k);

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
