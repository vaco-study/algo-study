import { expect } from "chai";
import solution from "../src/구명보트.js"; 

describe("구명 보트", () => {
  it ("case1", () => {
    expect(solution([70, 50, 80, 50], 100)).equal(3);
  });

  it ("case2", () => {
    expect(solution([70, 80, 50], 100)).equal(3);
  });
});
