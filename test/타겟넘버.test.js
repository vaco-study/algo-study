import { expect } from "chai";
import solution from "../src/타겟넘버.js"; 

describe("타겟 넘버", () => {
  it ("case1", () => {
    expect(solution([1, 1, 1, 1, 1,], 3)).equal(5);
  });

  it ("case2", () => {
    expect(solution([4, 1, 2, 1], 4)).equal(2);
  });
});