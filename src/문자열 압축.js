function solution(s) {
  let answer = 0;
  let halfSizeOfS = Math.floor(s.length / 2);

  if (s.length === 1) return 1;

  for (let i = 1; i <= halfSizeOfS; i++) {
    const result = compressArray(spliter(s, i)).length;

    if (!answer) {
      answer = result;
    }

    if (result < answer) {
      answer = result;
    }
  }

  return answer;
}

function spliter(string, num) {
  let result = [];

  for (let i = 0; i < string.length; i += num) {
    result.push(string.slice(i, i + num));
  }
  return result;
}

function compressArray(arr) {
  const temp = [];
  let currentIndex = 0;
  let countHowMany = 1;

  while (currentIndex < arr.length) {
    if (arr[currentIndex] === arr[currentIndex + 1]) {
      currentIndex++;
      countHowMany++;
      continue;
    }

    if (countHowMany === 1) {
      temp.push(arr[currentIndex]);
    } else {
      temp.push(countHowMany + arr[currentIndex]);
    }

    currentIndex++;
    countHowMany = 1;
  }

  return temp.reduce((a, x) => (a += x));
}
