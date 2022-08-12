import { expect } from "chai";
import solution from "../src/메뉴리뉴얼.js"; 

describe("메뉴 리뉴얼", () => {
  it ("case1", () => {
    expect(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])).equal(["AC", "ACDE", "BCFG", "CDE"]);
  });

  it ("case2", () => {
    expect(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])).equal(["ACD", "AD", "ADE", "CD", "XYZ"]);
  });

  it ("case3", () => {
    expect(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])).equal(["WX", "XY"]);
  });
});
