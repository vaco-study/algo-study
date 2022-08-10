import { expect } from "chai";
import solution from "../src/뉴스클러스터링.js"; 

describe("뉴스클러스터링", () => {
  it ("case1", () => {
    expect(solution("FRANCE", "french")).equal(16384);
  });

  it ("case2", () => {
    expect(solution("handshake", "shake hands")).equal(65536);
  });

  it ("case3", () => {
    expect(solution("aa1+aa2", "AAAA12")).equal(43690);
  });

  it ("case4", () => {
    expect(solution("E=M*C^2", "e=m*c^2")).equal(65536);
  });
});
