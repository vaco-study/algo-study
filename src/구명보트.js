function solution(people, limit) {
  let answer = 0;
  let waitBoats = [];
  people.sort((a, b) => b - a);

  for (let i = 0; i < people.length; i++) {
    if (limit - people[i] < 40) {
      answer++;
      continue;
    } else {
      const findIndex = waitBoats.findIndex(
        (element) => element + people[i] <= limit
      );

      if (findIndex === -1) {
        waitBoats.push(people[i]);
        continue;
      }

      answer++;
      waitBoats = waitBoats
        .slice(0, findIndex)
        .concat(waitBoats.slice(findIndex + 1));
    }
  }

  answer += waitBoats.length;

  return answer;
}
