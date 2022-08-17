function solution(bridge_length, weight, truck_weights) {
  let totalSeconds = 0;
  let bridgeWeight = 0;
  let i = 0;
  const bridge = Array(bridge_length).fill(0);

  while (bridge.length) {
    totalSeconds++;
    bridgeWeight -= bridge.shift();

    if (i < truck_weights.length) {
      if (bridgeWeight + truck_weights[i] <= weight) {
        bridgeWeight += truck_weights[i];
        bridge.push(truck_weights[i]);
        i++;

        continue;
      }

      bridge.push(0);
    }
  }

  return totalSeconds;
}
