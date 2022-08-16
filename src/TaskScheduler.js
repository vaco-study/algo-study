/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let answer = 0;
  if (n === 0) return tasks.length;
  let freqCounter = {};

  tasks.forEach((element) => {
    freqCounter[element] = (freqCounter[element] || 0) + 1;
  });

  while (Object.keys(freqCounter).length > 0) {
    duplicateEraser();
  }

  return answer;

  function duplicateEraser() {
    let minCountingNumbers;
    const newFreqCounter = {};

    console.log(freqCounter);

    Object.values(freqCounter).forEach((element) => {
      minCountingNumbers = minCountingNumbers
        ? Math.min(minCountingNumbers, element)
        : element;
    });

    Object.keys(freqCounter).forEach((element) => {
      freqCounter[element] -= minCountingNumbers;
    });

    answer = minCountingNumbers * Object.keys(freqCounter).length + n;

    Object.keys(freqCounter).forEach((element) => {
      if (freqCounter[element] > 0) {
        newFreqCounter[element] = freqCounter[element];
      }
    });

    freqCounter = newFreqCounter;
  }
};
