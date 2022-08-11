function solution(orders, course) {
  for (let i = 0; i < orders.length; i++) {
    const currentOrder = orders[i].split("");

    for (let j = 2; j < currentOrder.length; j++) {
      const combinations = getCombinations(currentOrder, j);
    }
  }
}

function getCombinations() {
  const combinations = [];

  // ...
}
