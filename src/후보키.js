function solution(relation) {
  var answer = 0;
  let currentSet;

  // set을 이용해 set을 생성한것과 실제 배열의 길이를 비교하는 방식으로 중복이 있는지 없는지 체크를 반복한다.

  for (let i = 1; i <= relation[0].length; i++) {}

  return answer;
}

function getCombinations(arr, selectNumber) {
  const result = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, original) => {
    const rest = original.slice(index + 1);
    const permutaions = getPermutaions(rest, selectNumber - 1);
    const attachedArr = permutaions.map((elm) => [fixed, ...elm]);
    result.push(...attachedArr);
  });

  return result;
}

// 각 열마다 중복이 있는것과 아닌 것을 찾는다.
// 중복이

// 매개변수 realation : 2차원 문자 배열 , 컴럼 최대 1~8, 로우는 최대 1 ~ 20(명). 모든 문자열의 길이는 1 ~ 8
// return :  이 릴레이션에서 후보키의 개수

// 후보키
// 관계 데이터베이스에서 릴레이션의 튜플을 유일하게 식별할 수 있는 '속성' 또는 '속성의 집합' 중, 다음 주 성질을 만족하는 것을 후보키
// 유일성 : 릴레이션에 있는 모든 튜플에 대해 유일하게 식별
// 최소성 : 유일성을 가진 키를 구성하는 속성 중 하나라도 제외되는 경우 유일성이 깨지는 것을 의미, 즉 릴레이션의 모든 튜플을 유일하게 식별하는데 꼭 필요한 속성들로만 구성 => 가장 최소의 속성으로 유일성을 만들면 됨

// 학번은 고유함 => 후보키 가능
// 이름 중복 발생 => 후보키 불가 , but 이름 전공 합치면 후보키 가능
// 학번, ["이름", "전공"]
