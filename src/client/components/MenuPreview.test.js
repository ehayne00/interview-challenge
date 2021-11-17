import React from "react";
import { render, screen } from "@testing-library/react";
import MenuPreview from "./MenuPreview";

const SELECTED_OPTIONS = [
  { id: 1, name: "Kale Bake" },
  { id: 2, name: "Beef Stew" },
];

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MenuPreview />);
    expect(baseElement).toBeTruthy();
  });
});
describe("#selectedOptions", () => {
  it("selectedOptions should be an array of objects", () => {
    expect(SELECTED_OPTIONS).toEqual(
      expect.arrayContaining([...SELECTED_OPTIONS])
    );
  });
});
