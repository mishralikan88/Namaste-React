import { sum } from "../sum";

test("should sum function calculate sum of 2 numbers ", () => {
  const result = sum(3, 4);
  // Assertion
  expect(result).toBe(7);
});
