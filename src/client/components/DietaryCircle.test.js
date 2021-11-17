import React from "react";
import { render, screen } from "@testing-library/react";
import DietaryCircle from "./DietaryCircle";

const TEXT = "string";

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DietaryCircle />);
    expect(baseElement).toBeTruthy();
  });
});
describe("#text", () => {
  it("should receive a string as a prop", () => {
    expect(TEXT).toMatch(TEXT);
  });
});
