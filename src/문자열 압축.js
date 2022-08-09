function solution(s) {
  if (s.length === 1) return 1;

  let answer = 0;
  const strings = [];

  for (let i = 1; i < parseInt(s.length / 2); i++) {
    let count = 1;
    let string = "";

    for (let j = 0; j < s.length; j += i) {
      const tempString = s.substring(j, i);
      const nextString = s.substring(j + 1, i);
      console.log(nextString);
    }
  }

  return answer;
}
