function solution(priorities, location) {
  var answer = 1;

  let requestList = [];

  for (let i = 0; i < priorities.length; i++) {
    requestList[i] = [priorities[i], i];
  }

  while (requestList.length > 0) {
    const isFirst = requestList.find(
      (element) => element[0] > requestList[0][0]
    );

    if (isFirst) {
      const relocatingElement = requestList.shift();
      console.log(relocatingElement);
      requestList.push(relocatingElement);
    } else {
      if (location === requestList[0][1]) {
        break;
      }
      answer++;
      requestList.shift();
    }
  }

  return answer;
}
