import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find element by role of button and text of 'Change to blue'
  const colorButtons = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButtons).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButtons);

  // expect the background color to be blue
  expect(colorButtons).toHaveStyle({ backgroundColor: "blue" });

  // expect text content change to be 'Change to red'
  expect(colorButtons.textContent).toBe("Change to red");
});
