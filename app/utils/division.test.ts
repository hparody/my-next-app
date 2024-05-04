import { division, ERROR_MESSAGE_ZERO } from "./division";

describe("Testing division", () => {
  test("Test division", () => {
    expect(division(8, 2)).toBe(4);
  });
  
  test("Test division error when divisor is zero", () => {
    expect(division(8, 0)).toBe(ERROR_MESSAGE_ZERO);
  });
});
