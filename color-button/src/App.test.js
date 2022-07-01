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

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButtons = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButtons).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables button on second click", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Disabled button has gray background and reverts to red", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Clicked disabled button has gray background and reverts to blue", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // change button to blue
  fireEvent.click(colorButton);

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});
