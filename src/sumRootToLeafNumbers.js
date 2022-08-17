export default function sumNumbers(arr) {
  const tree = [...arr];
  const sumStrArr = [];
  let sumStr = "";

  function dfs(node, index) {
    if (!tree.length) return;

    node = tree[index];

    sumStr += `${node}`;
    tree.shift();

    tree.forEach((value) => {
      sumStrArr.push(sumStr);
      dfs(value, index + 1);
    });
  }

  tree.forEach((node) => {
    dfs(node, 0);
  });

  const answer = sumStrArr.reduce((acc, cur) => acc + Number(cur), 0);

  return answer;
};
