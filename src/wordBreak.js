function wordBreak(s, wordDict) {
  return verifyBreak(s, wordDict, 0, []);
}

function verifyBreak(word, dic, start, memo) {
  if (start === word.length) return true;
  if (memo[start] !== undefined) return memo[start];

  for (let end = start + 1; end <= word.length; end++) {
    let wildGuess = word.slice(start, end);

    if (dic.includes(wildGuess)) {
      if (verifyBreak(word, dic, end, memo)) {
        return (memo[start] = true);
      }
    }
  }

  return (memo[start] = false);
}
