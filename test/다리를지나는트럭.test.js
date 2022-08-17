import { expect } from "chai";
import solution from "../src/다리를지나는트럭.js"; 

describe("다리를 지나는 트럭", () => {
  it ("case1", () => {
    expect(solution(2, 10, [7, 4, 5, 6])).equal(8);
  });

  it ("case2", () => {
    expect(solution(100, 100, [10])).equal(101);
  });
  
  it ("case3", () => {
    expect(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).equal(110);
  });
});
