function solution(word) {
  const arr = ["A", "E", "I", "O", "U"];
  let dictionary = "";
  let count = 0;
  let index = 0;

  while (true) {
    if (word === dictionary) {
      return count;
    }

    if (index === arr.length - 1) {
      index = 0;
      continue;
    }

    count++;
    dictionary += arr[index];
  }
}
