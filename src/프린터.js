function solution(priorities, location) {
  const mappingArr = priorities.map((priority, index) => ({ priority, index }));
  let printCount = 0;

  while (true) {
    const candidate = mappingArr.shift();

    if (mappingArr.some((element) => element.priority > candidate.priority)) {
      mappingArr.push(candidate);
      continue;
    }

    printCount++;

    if (candidate.index === location) return printCount;
  }
}
