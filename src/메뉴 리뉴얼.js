function solution(orders, course) {
  // const frequencyCounter = {};
  // const nestedCounter = {};

  // for (let i = 0; i < orders.length; i++) {
  //   for (let j = 0; j < orders[i].length; j++) {
  //     const currentMenu = orders[i][j];
  //     frequencyCounter[currentMenu] = (frequencyCounter[currentMenu] || 0 ) + 1;

  //     if (frequencyCounter[currentMenu] > 1) {
  //       nestedCounter[currentMenu] = frequencyCounter[currentMenu];
  //     }
  //   }
  // }

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
