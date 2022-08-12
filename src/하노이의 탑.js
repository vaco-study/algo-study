function solution(n) {
  var answer = [];

  // 세개의 탑 선언
  // 1번탑에 숫자 순서대로 추가
  const firstTower = [];
  const secondTower = [];
  const thirdTower = [];

  for (let i = n; i >= 1; i--) {
    firstTower.push(i);
  }

  console.log(firstTower);

  return answer;
}
