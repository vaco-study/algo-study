import { expect } from "chai";
import solution from "../src/큰수만들기.js"; 

describe.only("큰 수 만들기", () => {
  it ("case1", () => {
    expect(solution("1924", 2)).equal("94");
  });

  it ("case2", () => {
    expect(solution("1231234", 3)).equal("3234");
  });

  it ("case3", () => {
    expect(solution("4177252841", 4)).equal("775841");
  });
});
