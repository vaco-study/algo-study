function solution(word) {
  const chars = ["A", "E", "I", "O", "U"];
  let result = [];

  const dfs = (len, res) => {
    if (res.length === len) {
      result = [...result, res];
    } else {
      for (let i = 0; i < 5; i++) {
        dfs(len, res + chars[i]);
      }
    }
  };

  for (let i = 1; i <= 5; i++) {
    dfs(i, "");
  }

  return result.sort().findIndex((res) => res === word) + 1;
}
