function solution(record) {
  const result = [];
  const idList = {};

  record.forEach((element) => idChecker(element));

  for (let i = 0; i < record.length; i++) {
    messageProcessor(record[i]);
  }

  function idChecker(data) {
    const info = data.split(" ");

    if (info[0] === "Enter") {
      return (idList[info[1]] = info[2]);
    }

    if (info[0] === "Change") {
      return (idList[info[1]] = info[2]);
    }
  }

  function messageProcessor(data) {
    const info = data.split(" ");

    if (info[0] === "Enter") {
      return result.push(`${idList[info[1]]}님이 들어왔습니다.`);
    }

    if (info[0] === "Leave") {
      return result.push(`${idList[info[1]]}님이 나갔습니다.`);
    }
  }

  return result;
}
