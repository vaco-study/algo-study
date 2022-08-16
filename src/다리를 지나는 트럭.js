function solution(bridge_length, weight, truck_weights) {
  let spentSeconds = 0;
  let bridgeWeight = 0;
  const bridge = [];

  while (truck_weights.length) {
    spentSeconds++;

    if (bridge.length === bridge_length) {
      const firstTruckOnBridge = bridge.shift();
      bridgeWeight -= firstTruckOnBridge;
    }

    if (bridgeWeight + truck_weights[0] > weight) {
      bridge.push(0);
      continue;
    }

    const curTruckWeight = truck_weights.shift();
    bridge.push(curTruckWeight);
    bridgeWeight += curTruckWeight;
  }

  spentSeconds += bridge_length;

  return spentSeconds;
}
