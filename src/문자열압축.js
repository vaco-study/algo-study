function solution(s) {
  let count = 1;
  let str = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        str += count;
      }

      str += s[i];
      count = 1;
    }
  }
  return str.length;
}
