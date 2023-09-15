//@ts-expect-error
import { test, expect, describe } from "bun:test";
import IconvWrap, { optionsSetup } from ".";

describe("optionsSetup", () => {
  test("default options", () => {
    expect(optionsSetup({})).toEqual([
      50,
      "\n".charCodeAt(0),
      " ".charCodeAt(0),
    ]);
  });
  test("convert strings", () => {
    expect(optionsSetup({ newline: "a" })).toEqual([
      50,
      "a".charCodeAt(0),
      " ".charCodeAt(0),
    ]);
  });
  test("non-default options", () => {
    expect(optionsSetup({ width: 20, newline: 21, space: 22 })).toEqual([
      20, 21, 22,
    ]);
  });
});

describe ("IconvWrap", () => {
    test("empty buffer", () => {
        expect(IconvWrap(Buffer.from([]))).toEqual(Buffer.from([]));
      });
      test("null", () => {
        //@ts-expect-error
        expect(IconvWrap()).toEqual(undefined);
      }); 
})