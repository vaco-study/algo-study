function solution(record) {
  const userInfo = {};
  const result = [];

  for (const message of record) {
    const msgArray = message.split(" ");

    if (msgArray.length > 2) {
      userInfo[msgArray[1]] = msgArray[2];
    }
  }

  for (const message of record) {
    const msgArray = message.split(" ");

    if (msgArray[0] === "Enter") {
      result.push(userInfo[msgArray[1]] + "님이 들어왔습니다.");
    } else if (msgArray[0] === "Leave") {
      result.push(userInfo[msgArray[1]] + "님이 나갔습니다.");
    }
  }

  return result;
}
