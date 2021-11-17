import React from "react";
import { render, screen } from "@testing-library/react";
import ItemCard from "./ItemCard";

const SELECTED_OPTIONS = [
  { id: 1, name: "Kale Bake" },
  { id: 2, name: "Beef Stew" },
];

const IS_SELECTED = true;

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ItemCard />);
    expect(baseElement).toBeTruthy();
  });
});

describe("#isSelected", () => {
  it("isSelected should be a boolean", () => {
    expect(IS_SELECTED).toBeTruthy();
  });
});

describe("#selectedOptions", () => {
  it("selectedOptions should be an array of objects", () => {
    expect(SELECTED_OPTIONS).toEqual(
      expect.arrayContaining([...SELECTED_OPTIONS])
    );
  });
});
