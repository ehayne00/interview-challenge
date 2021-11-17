import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

const HAS_ERROR = true;

const MENU_OPTIONS = [
  { id: 1, name: "Kale Bake" },
  { id: 2, name: "Beef Stew" },
];

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
  //   it("should make an API call", () => {
  //   });
});
describe("#menuOptions", () => {
  it("menuOptions should be an array of objects", () => {
    expect(MENU_OPTIONS).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ ...MENU_OPTIONS[0] }),
        expect.objectContaining({ ...MENU_OPTIONS[1] }),
      ])
    );
  });
});
describe("#hasError", () => {
  it("hasError should be a boolean", () => {
    expect(HAS_ERROR).toBeTruthy();
  });
});
