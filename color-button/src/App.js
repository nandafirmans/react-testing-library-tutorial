import "./App.css";
import { useMemo, useState } from "react";

export const replaceCamelCaseWithSpace = (colorName = "") =>
  colorName.replace(/\B([A-Z])\B/g, " $1");

function App() {
  const [isButtonRed, setIsButtonRed] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const getColor = (isRed = true) =>
    isRed ? "MediumVioletRed" : "MidnightBlue";

  const backgroundColor = useMemo(
    () => (isButtonDisabled ? "grey" : getColor(isButtonRed)),
    [isButtonDisabled, isButtonRed]
  );

  return (
    <div style={{ margin: 24 }}>
      <button
        disabled={isButtonDisabled}
        style={{
          backgroundColor,
          color: "white",
          fontSize: 16,
          border: 0,
          borderRadius: 8,
          padding: "6px 16px",
        }}
        onClick={() => setIsButtonRed(!isButtonRed)}
      >
        {`Change to ${replaceCamelCaseWithSpace(getColor(!isButtonRed))}`}
      </button>
      <br />
      <br />
      <input
        id="disable-button-checkbox"
        type="checkbox"
        aria-checked={isButtonDisabled}
        checked={isButtonDisabled}
        onChange={() => setIsButtonDisabled(!isButtonDisabled)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
