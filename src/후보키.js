function solution(table) {
  // table의 column 수 만큼 변수 생성

  for (const row of table) {
    // column 수 만큼 생성된 변수에 row를 구조분해할당
  }

  // 조합을 통해 후보키를 구함
  // 유효한 후보키인지 판단
  // 유효한 후보키의 개수 반환
}

function getPermutations(arr, selectNumber) {
  const results = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
}
