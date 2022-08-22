function solution(record) {
  const messageList = {};
  const result = [];
  record = record.map((message) => message.split(' '));

  record.forEach((messageInfo) => {
    const [action, id, nickname] = messageInfo;

    if (messageInfo.length > 2) {
      messageList[id] = nickname;
    }
  });

  record.forEach((messageInfo) => {
    const [action, id] = messageInfo;

    if (action === 'Enter') {
      result.push(`${messageList[id]}님이 들어왔습니다.`);
    }

    if (action === 'Leave') {
      result.push(`${messageList[id]}님이 나갔습니다.`);
    }
  });

  return result;
}
