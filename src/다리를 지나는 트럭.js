function solution(bridge_length, weight, truck_weights) {
  let times = 0;
  let bridgeWeight = 0;
  const trucksOnBridge = [];

  while (truck_weights.length) {
    times++;

    if (trucksOnBridge.length === bridge_length) {
      const firstTruckOnBridge = trucksOnBridge.shift();
      bridgeWeight -= firstTruckOnBridge;
    }

    if (bridgeWeight + truck_weights[0] > weight) {
      trucksOnBridge.push(0);
      continue;
    }

    const curTruck = truck_weights.shift();
    trucksOnBridge.push(curTruck);
    bridgeWeight += curTruck;
  }

  times += bridge_length;

  return times;
}
