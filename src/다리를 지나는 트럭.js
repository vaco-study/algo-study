function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let left = 0;
  let right = left + 1;

  if (truck_weights.length === 1) return bridge_length + 1;

  while (truck_weights.length) {
    if (truck_weights[left] + truck_weights[right] > weight) {
      time + bridge_length;
      truck_weights.shift();
    } else {
      time + bridge_length;
    }

    return time;
  }
}
