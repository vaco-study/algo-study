import { expect } from "chai";
import solution from "../src/하노이의탑.js"; 

describe.only("하노이의 탑", () => {
  it ("case1", () => {
    expect(solution(1)).equal([[1, 3]]);
  });

  it ("case2", () => {
    expect(solution(2)).equal([[1, 2], [1, 3], [2, 3]]);
  });
  
  it ("case3", () => {
    expect(solution(3)).equal([[1, 3], [1, 2], [3, 2], [1, 3], [2, 1], [2, 3], [1, 3]]);
  });
});
