function solution(record) {
  const answer = [];
  const finalNicknameById = new Map();

  record.forEach((v) => {
    const [_, uid, nickname] = v.split(" ");

    if (nickname) {
      finalNicknameById.set(uid, nickname);
    }
  });

  record.forEach((v) => {
    const [status, uid] = v.split(" ");

    if (status === "Enter") {
      answer.push(`${finalNicknameById.get(uid)}님이 들어왔습니다.`);
    }

    if (status === "Leave") {
      answer.push(`${finalNicknameById.get(uid)}님이 나갔습니다.`);
    }
  });

  return answer;
}
