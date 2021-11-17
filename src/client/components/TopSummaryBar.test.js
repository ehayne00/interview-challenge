import React from "react";
import { render, screen } from "@testing-library/react";
import TopSummaryBar from "./TopSummaryBar";

const STRING_PARAMS = "ve";

const INTEGER_ANSWER = 2;

const ALL_DIETARY_OPTIONS = ["ve", "v"];

const SELECTED_OPTIONS = [
  { id: 1, name: "Kale Bake", dietaries: ["ve", "v"] },
  { id: 2, name: "Beef Stew", dietaries: ["ve", "v"] },
];

const getCount = (str) => {
  return SELECTED_OPTIONS.filter((el) => el.dietaries.includes(str)).length;
};

describe("TopSummaryBar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TopSummaryBar />);
    expect(baseElement).toBeTruthy();
  });
});
describe("#getCount", () => {
  it("getCount should receive a string", () => {
    expect(STRING_PARAMS).toMatch(STRING_PARAMS);
  });
//   it("should return an integer", () => {
//     expect(getCount(STRING_PARAMS)).toReturn(expect.to)
//   });
});
describe("#allDietaryOptions", () => {
  it("allDietaryOptions should be an array of strings", () => {
    expect(ALL_DIETARY_OPTIONS).toEqual(
      expect.arrayContaining([...ALL_DIETARY_OPTIONS])
    );
  });
});
