function solution(table) {
  // table의 column 수 만큼 변수 생성

  for (const row of table) {
    // column 수 만큼 생성된 변수에 row를 구조분해할당
  }

  // 조합을 통해 후보키를 구함
  // 유효한 후보키인지 판단
  // 유효한 후보키의 개수 반환
}

const getCombinations = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
};
