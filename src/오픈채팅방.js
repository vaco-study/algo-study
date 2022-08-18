function solution(recordArr) {
  const answer = [];
  const userMap = new Map();

  for (const record of recordArr) {
    const [type, id, nickname] = record.split(" ");

    switch (type) {
      case "Enter":
        userMap.set(id, nickname);
        answer.push(`${id}님이 들어왔습니다.`);
        break;
      case "Change":
        userMap.set(id, nickname);
        break;
      case "Leave":
        answer.push(`${id}님이 나갔습니다.`);
        break;
    }
  }

  return answer.map((element) => {
    const index = element.indexOf("님");
    return userMap.get(element.substring(0, index)) + element.substring(index);
  });
}
