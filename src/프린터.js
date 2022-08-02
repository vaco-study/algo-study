function solution(priorities, location) {
  const swappedCounter = priorities.indexOf(Math.max(...priorities));

  const potentialResult =
    location + 1 - swappedCounter < 1
      ? priorities.length + location + 1 - swappedCounter
      : location + 1 - swappedCounter;

  return swappedCounter ? potentialResult : location + 1;
}
