function solution(bridge_length, weight, truck_weights) {
  const bridge = new Array(bridge_length).fill(0);
  let time = 0;

  while (true) {
      const truck = truck_weights[0];
      const onTheBridge = bridge.reduce((acc, cur) => acc + cur, 0);
      time++;
      
      if (onTheBridge + truck <= weight) {
          bridge.shift();
          bridge.push(truck_weights.shift());
      } else {
          const result = bridge.shift();
          const onTheBridge = bridge.reduce((acc, cur) => acc + cur, 0);
          
          if (result && onTheBridge + truck <= weight) {
              bridge.push(truck_weights.shift())
          } else {
              bridge.push(0)
          }
      }
      
      if (!truck_weights.length && bridge.every((v) => v=== 0)) break;
  }
  return time;
}
