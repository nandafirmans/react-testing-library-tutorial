import { render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const colorButtons = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButtons).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {});
