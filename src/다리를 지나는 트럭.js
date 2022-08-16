function solution(bridge_length, weight, truck_weights) {
  const truckWeightsCopy = truck_weights.slice();
  let queue = [];
  let times = 0;

  while (truckWeightsCopy.length || queue.length) {
    times++;

    queue = queue.map((truck) => ({
      weight: truck.weight,
      times: truck.times - 1,
    }));

    const firstTruck = queue[0];
    if (firstTruck && firstTruck.times === 0) queue.shift();

    if (!truckWeightsCopy.length) continue;

    const queueSum = queue.reduce((acc, cur) => acc + cur.weight, 0);

    if (queueSum + truckWeightsCopy[0] > weight) continue;

    const truck = truckWeightsCopy.shift();
    queue.push({ weight: truck, times: bridge_length });
  }

  return times;
}
