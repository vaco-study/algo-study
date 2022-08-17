import { expect } from "chai";
import solution from "../src/sumRootToLeafNumbers.js"; 

describe.only("Sum Root To Leaf Numbers", () => {
  it ("case1", () => {
    expect(solution([1, 2, 3])).equal(25);
  });

  it ("case2", () => {
    expect(solution([4, 9, 0, 5, 1])).equal(1026);
  });
});
