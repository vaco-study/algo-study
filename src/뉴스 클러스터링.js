function solution(str1, str2) {
  const arr1 = getElements(str1);
  const arr2 = getElements(str2);

  if (!arr1.length || !arr2.length) {
    return 65536;
  }

  const copiedArr1 = arr1.slice();
  const copiedArr2 = arr2.slice();

  const difference = arr1.filter((element) => {
    const index = copiedArr2.indexOf(element);

    if (index !== -1) {
      copiedArr2.splice(index, 1);
      return element;
    }
  });
  //const union;
}

function getElements(str) {
  const strArr = str.toLowerCase().split("");
  const result = [];

  for (let i = 0; i < strArr.length - 1; i++) {
    const specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]/;
    const element = strArr[i] + strArr[i + 1];

    if (!specialCharacters.test(element)) {
      result.push(element);
    }
  }

  return result;
}
