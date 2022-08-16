function solution(bridge_length, weight, truck_weights) {
  const truckWeightsCopy = truck_weights.slice();
  let weightOnBridge = 0;
  let queue = [];
  let times = 0;

  while (truckWeightsCopy.length || queue.length) {
    times++;

    queue = queue.map((truck) => ({
      weight: truck.weight,
      times: truck.times - 1,
    }));

    const firstTruck = queue[0];
    if (firstTruck && firstTruck.times === 0)
      weightOnBridge -= queue.shift().weight;

    if (!truckWeightsCopy.length) continue;

    if (weightOnBridge + truckWeightsCopy[0] > weight) continue;

    const truckWeight = truckWeightsCopy.shift();
    queue.push({ weight: truckWeight, times: bridge_length });

    weightOnBridge += truckWeight;
  }

  return times;
}
