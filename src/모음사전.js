function solution(word) {
  const alphabet = ["A", "E", "I", "O", "U"];
  const allcases = [];

  getPermutaions(alphabet, alphabet.length);

  function getPermutaions(array, num) {
    const result = [];

    if (num === 1) {
      return array;
    }

    array.forEach((fixed, index, origin) => {
      const cases = getPermutaions(origin.slice(index + 1), num - 1);
      const attachedFixed = cases.map((value) => [fixed, ...value]);

      result.push(...attachedFixed);
    });
  }

  return allcases.indexOf(word) + 1;
}
