import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders a button with the correct label", () => {
    const label = "Click me!";
    render(<Button label={label} />);
    const buttonElement = screen.getByRole("button", { name: label });
    expect(buttonElement).toBeInTheDocument();
  });
});
