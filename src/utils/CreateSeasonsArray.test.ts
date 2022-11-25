import createSeasonsArray from "./CreateSeasonsArray";

test("given a number, returns an array up to and including that number", () => {
  expect(createSeasonsArray(8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(createSeasonsArray(1)).toEqual([1]);
});
