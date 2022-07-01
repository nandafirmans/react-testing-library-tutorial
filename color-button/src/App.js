import "./App.css";
import { useMemo, useState } from "react";

function App() {
  const [isButtonRed, setIsButtonRed] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const getColor = (isRed = true) => (isRed ? "red" : "blue");

  const backgroundColor = useMemo(
    () => (isButtonDisabled ? "grey" : getColor(isButtonRed)),
    [isButtonDisabled, isButtonRed]
  );

  return (
    <div>
      <button
        disabled={isButtonDisabled}
        style={{ backgroundColor }}
        onClick={() => setIsButtonRed(!isButtonRed)}
      >
        {`Change to ${getColor(!isButtonRed)}`}
      </button>

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
