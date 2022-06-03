import { add } from "./sample";

describe("add", () => {
  it("should add two numbers together", () => {
    expect(add(4, 5)).toEqual(9);
  });
});
