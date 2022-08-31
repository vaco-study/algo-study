function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const answer = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const prevLast = answer[answer.length - 1][1];
    const curFirst = intervals[i][0];
    const curLast = intervals[i][1];

    if (prevLast >= curFirst) {
      answer[answer.length - 1][1] = Math.max(prevLast, curLast);
    } else {
      answer.push(intervals[i]);
    }
  }

  return answer;
}
