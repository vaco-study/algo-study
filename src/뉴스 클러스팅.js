function solution(str1, str2) {
  const hashStr1 = getMultipleSets(str1);
  const hashStr2 = getMultipleSets(str2);
  let str1TotalValue = 0;
  let str2TotalValue = 0;
  let duplicatedValues = 0;

  for (let [key, value] of hashStr1) {
    if (value !== 0 && hashStr2.get(key) && hashStr2.get(key) !== 0) {
      const smallValue = value >= hashStr2.get(key) ? hashStr2.get(key) : value;
      hashStr1.set(key, value - smallValue);
      hashStr2.set(key, hashStr2.get(key) - smallValue);

      duplicatedValues += smallValue;
    }
  }

  for (let value of hashStr1.values()) {
    str1TotalValue += value;
  }

  for (let value of hashStr2.values()) {
    str2TotalValue += value;
  }

  const totalSum = duplicatedValues + str1TotalValue + str2TotalValue;
  let jaccardSimilarity = duplicatedValues / totalSum;

  if (duplicatedValues && !totalSum) {
    jaccardSimilarity = 0;
  } else if (!duplicatedValues && !totalSum) {
    jaccardSimilarity = 1;
  }

  return Math.floor(jaccardSimilarity * 65536);
}

function getMultipleSets(str) {
  const regex = /^[a-z|A-Z]+$/;
  const hash = new Map();

  for (let i = 0; i < str.length - 1; i++) {
    const character = str[i] + str[i + 1];
    const lowerCase = character.toLowerCase();

    if (!regex.test(lowerCase)) continue;

    if (hash.get(lowerCase)) {
      hash.set(lowerCase, hash.get(lowerCase) + 1);
    } else {
      hash.set(lowerCase, 1);
    }
  }

  return hash;
}
