function solution(orders, course) {
  const hash = {};

  for (let i = 0; i < course.length; i++) {
    let j = 0;
    let k = 0;

    while (k < orders.length) {
      j = 0;

      while (j < orders[k].length) {
        // [2,3,4]
        const menus = orders[k].substring(j, j + course[i]);
        j++;

        if (menus.length < course[i]) {
          continue;
        }

        if (!hash[menus]) {
          hash[menus] = 1;
        } else {
          hash[menus] = ++hash[menus];
        }
      }

      k++;
    }
  }

  return hash;
}

const getCombinations = function (arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);

    results.push(...attached);
  });

  return results;
};
