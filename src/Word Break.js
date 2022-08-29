var wordBreak = function (s, wordDict) {
  let index = 0;

  while (index < s.length) {
    const target = s.substring(0, index + 1);

    if (wordDict.includes(target)) {
      s = s.substring(index + 1);

      index = 0;
      continue;
    }

    index++;
  }

  return !s.length;
};
