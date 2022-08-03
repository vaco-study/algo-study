function solution(word) {
  const alphabet = ["A", "E", "I", "O", "U"];
  const numOfWords = [1, 6, 31, 156, 781];
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    const position = alphabet.indexOf(word[i]);
    const numOfRestWords = numOfWords[4 - i];

    count += numOfRestWords * position + 1;
  }

  return count;
}
