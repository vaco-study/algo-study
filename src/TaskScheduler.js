function leastInterval(tasks, n) {
  if (n === 0) {
    return tasks.length;
  }

  const countTask = tasks.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 0;
    }

    acc[cur] += 1;

    return acc;
  }, {});

  const maxCount = Math.max(...Object.entries(countTask).map((value) => value[1]));
};
