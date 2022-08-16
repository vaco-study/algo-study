function solution(bridge_length, weight, truck_weights) {
  let totalSeconds = 0;
  const bridge = Array(bridge_length).fill(0);

  while (bridge.length) {
    totalSeconds++;
    bridge.shift();

    if (truck_weights.length) {
      const bridgeWeight = bridge.reduce((acc, cur) => acc + cur, 0);

      if (bridgeWeight + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());

        continue;
      }

      bridge.push(0);
    }
  }

  return totalSeconds;
}
