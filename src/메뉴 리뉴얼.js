function solution(orders, course) {
  const result = [];

  for (let num of course) {
    const courses = {};

    for (let order of orders) {
      if (order.length < num) continue;

      const combination = getCombinations([...order], num);

      for (let menus of combination) {
        courses[menus] = courses[menus] ? ++courses[menus] : 1;
      }
    }

    const max = Math.max(...Object.values(courses));

    if (max === 1) continue;

    for (let key in courses) {
      if (courses[key] === max) {
        result.push(key);
      }
    }
  }

  return result.sort();
}

const getCombinations = function (array, selectNum) {
  if (selectNum === 1) return array.map((value) => [value]);

  const units = [];

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) =>
      [...fixed, ...combination].sort().join("")
    );

    units.push(...attached);
  });

  return units;
};
