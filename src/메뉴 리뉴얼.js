function solution(orders, course) {
  orders = orders.map((order) => order.split('').sort());

  const result = [];
  const orderCount = {};

  const allOrders = course
    .map((length) => {
      const courseLists = orders.map((order) => getCombinations(order, length));
      return courseLists;
    })
    .flat(2);

  allOrders.forEach(
    (order) => (orderCount[order] = (orderCount[order] || 0) + 1)
  );

  course.forEach((length) => {
    let maxCount = -Infinity;
    const sameLengthOrders = [];

    for (const [order, count] of Object.entries(orderCount)) {
      if (order.length === length) {
        maxCount = Math.max(maxCount, count);
        sameLengthOrders.push([order, count]);
      }
    }

    for (const [order, count] of sameLengthOrders) {
      if (count >= maxCount && maxCount > 1) {
        result.push(order);
      }
    }
  });

  return result.sort();
}

function getCombinations(arr, length) {
  const result = [];

  if (length === 1) return arr;

  arr.forEach((curFood, index, thisArg) => {
    const rest = thisArg.slice(index + 1);
    const combinations = getCombinations(rest, length - 1);
    combinations.forEach((food) => result.push(curFood + food));
  });

  return result;
}
