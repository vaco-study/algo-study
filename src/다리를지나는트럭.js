function solution(bridge_length, weight, truck_weights) {
  let timeTaken = 0;
  const totalTrucks = truck_weights.length;
  const trucksOnBridge = [];
  const trucksOverBridge = [];
  let totalWeightOnBridge = 0;

  while (trucksOverBridge.length < totalTrucks) {
    // 행위 하나에, 현재 브리지에 있는 트럭 이동시키기
    trucksOnBridge.forEach((element) => {
      element[1] -= 1;
    });

    // 행위 하나에, 다리건넌 트럭 배열에 추가하기
    if (trucksOnBridge.length > 0 && trucksOnBridge[0][1] === 0) {
      const poppedTruck = trucksOnBridge.shift();
      totalWeightOnBridge -= poppedTruck[0];
      trucksOverBridge.push(poppedTruck);
    }

    // 행위 하나에, 현재 대기중에 있는 트럭 브리지에 옮기기
    const targetTruck = truck_weights[0];

    if (
      targetTruck + totalWeightOnBridge <= weight &&
      trucksOnBridge.length < bridge_length
    ) {
      totalWeightOnBridge += targetTruck;
      trucksOnBridge.push([targetTruck, bridge_length]);
      truck_weights.shift();
    }

    // 행위 하나에 시간 1개 추가 시간 카운팅 하기
    timeTaken++;
  }

  return timeTaken;
}
