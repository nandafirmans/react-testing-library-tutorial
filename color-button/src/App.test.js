import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelCaseWithSpace } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find element by role of button and text of 'Change to Midnight Blue'
  const colorButtons = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // expect the background color to be MediumVioletRed
  expect(colorButtons).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButtons);

  // expect the background color to be MidnightBlue
  expect(colorButtons).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect text content change to be 'Change to Medium Violet Red'
  expect(colorButtons.textContent).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButtons = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButtons).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables button on second click", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Disabled button has gray background and reverts to MediumVioletRed", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("Clicked disabled button has gray background and reverts to MidnightBlue", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // change button to MidnightBlue
  fireEvent.click(colorButton);

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("space before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelCaseWithSpace("Red")).toBe("Red");
  });

  test("Works for one inner capital letters", () => {
    expect(replaceCamelCaseWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelCaseWithSpace("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
