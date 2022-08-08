import { expect } from "chai";
import solution from "../src/프렌즈4블록.js"; 

describe("프렌즈4블록", () => {
  it ("case1", () => {
    expect(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])).equal(14);
  });

  it ("case2", () => {
    expect(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])).equal(15);
  });
});
