//const {expect, test} = require('@jet/globals')

const { returnTwo } = require("./functions");
const { greeting } = require("./functions");
const { add } = require("./functions");
const { multiply } = require("./functions");
const { divide } = require("./functions");
const { subtract } = require("./functions");

test("Should return [integer]", () => {
  expect(returnTwo(2)).toEqual("2");
});

it("Should return Hello [name]", () => {
  expect(greeting("James")).toEqual("Hello, James.");
  expect(greeting("Jill")).toEqual("Hello, Jill.");
});

describe("Math function", () => {
  it("Should return the sum", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(5, 9)).toEqual(14);
  });

  it("Should return the multiply", () => {
    expect(multiply(2, 2)).toEqual(4);
    expect(multiply(5, 9)).toEqual(45);
  });

  it("Should return the divide", () => {
    expect(divide(4, 2)).toEqual(2);
    expect(divide(100, 10)).toEqual(10);
  });

  it("Should return the subtract", () => {
    expect(subtract(10, 2)).toEqual(8);
    expect(subtract(23, 7)).toEqual(16);
  });
});
