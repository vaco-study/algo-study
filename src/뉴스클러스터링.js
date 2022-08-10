function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const splitedStr1 = helper(str1);
  const splitedStr2 = helper(str2);

  let count = 0;

  for (let i = 0; i < splitedStr1.length; i++) {
    if (splitedStr1[i] === splitedStr2[i]) {
      count++;
    }
  }
}

const helper = (str) => {
  let arr = [];

  for (let i = 0; i < str.length - 1; i++) {
    let newStr = str[i] + str[i + 1];
    arr.push(newStr);
  }

  return arr;
};
