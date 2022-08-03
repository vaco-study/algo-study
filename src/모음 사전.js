function solution(goal) {
  const vowels = ["A", "E", "I", "O", "U"];
  const wordsCollection = [];

  function dfs(word, length) {
    if (length === 5) return;

    wordsCollection.push(word);

    vowels.forEach((vowel) => {
      dfs(word + vowel, length + 1);
    });
  }

  vowels.forEach((word) => {
    dfs(word, 0);
  });

  return wordsCollection.indexOf(goal) + 1;
}
