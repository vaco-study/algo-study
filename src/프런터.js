function solution(priorities, location) {
  const stack = [];
  let counter = 0;

  for (let i = 0; i < priorities.length; i++) {
    const printerObj = {};
    const currentDocument = priorities[i];

    printerObj[i] = currentDocument;
    stack.push(printerObj);
  }

  while (true) {
    const currentMax = findMaxNumber(stack);
    const firstDocumentInQueue = stack.shift();

    if (Object.values(firstDocumentInQueue)[0] === currentMax) {
      counter++;

      if (+Object.keys(firstDocumentInQueue)[0] === location) break;
    } else {
      stack.push(firstDocumentInQueue);
    }
  }

  return counter;
}

// 객체가 담긴 배열에서의 max priority를 받아오는 유틸 함수
function findMaxNumber(arr) {
  let max = 0;

  for (const object of arr) {
    const currentPriority = Object.values(object)[0];

    if (currentPriority > max) {
      max = currentPriority;
    }
  }

  return max;
}

console.log(solution([2, 1, 3, 2], 2));
