function solution(records) {
  const ids = new Map();
  const result = [];

  for (let record of records) {
    const [action, id, nickName] = record.split(" ");

    if (action !== "Leave" && ids.get(id) !== nickName) {
      ids.set(id, nickName);
    }
  }

  for (let record of records) {
    const [action, id] = record.split(" ");

    if (action === "Change") continue;

    if (action === "Enter") {
      result.push(`${ids.get(id)}님이 들어왔습니다.`);
      continue;
    }

    result.push(`${ids.get(id)}님이 나갔습니다.`);
  }

  return result;
}
