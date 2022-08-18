function solution(records) {
  const answer = [];
  const store = {};
  const log = {};

  for (let i = 0; i < records.length; i++) {
    const record = records[i].split(" ");
    const command = record[0];
    const id = record[1];
    const nickname = record[2];

    store[id] = nickname ? store[id] = nickname : store[id];

    if (command === "Enter") {
      log[i] = ["Enter", id];
    } else if (command === "Leave") {
      log[i] = ["Leave", id];
    }
  }
  
  const keys = Object.keys(log);
  
  keys.forEach(key => {
    const [command, id] = log[key];
    
    if (command === "Enter") {
      answer.push(`${store[id]}님이 들어왔습니다.`);
    } else {
      answer.push(`${store[id]}님이 나갔습니다.`)
    }
  });

  return answer;
}
