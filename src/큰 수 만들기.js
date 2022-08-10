function solution(number, k) {
  const limit = number.length - k;
  let target = number.slice(limit);

  const result = compareAndRemove(target, limit);
  
  if (result.length === limit) {
    return result;
  }

  return compareAndRemove(result + number.slice(limit, number.length), limit);
}

function compareAndRemove(target, limit) {
  let i = 0;

  while (target.length > limit) {
    if (target[i] < target[i + 1]) {
      target = target.slice(1, target.length);
    } else {
      i++;
    }
  }

  return target;
}
