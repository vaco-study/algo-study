// 재귀 풀이

function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const dictionary = [];

  const writeDictionary = (chunk) => {
    dictionary.push(chunk);

    for (const nextChar of vowels) {
      const nextChunk = chunk + nextChar;
      if (nextChunk.length > 5) continue;
      writeDictionary(nextChunk);
    }
  };

  vowels.forEach((char) => writeDictionary(char));

  return dictionary.indexOf(word) + 1;
}
