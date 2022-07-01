import "./App.css";
import { useState } from "react";

function App() {
  const [isButtonRed, setIsButtonRed] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const getColor = (isRed = true) => (isRed ? "red" : "blue");

  return (
    <div>
      <button
        disabled={isButtonDisabled}
        style={{ backgroundColor: getColor(isButtonRed) }}
        onClick={() => setIsButtonRed(!isButtonRed)}
      >
        {`Change to ${getColor(!isButtonRed)}`}
      </button>
      <input
        type="checkbox"
        checked={isButtonDisabled}
        onChange={() => setIsButtonDisabled(!isButtonDisabled)}
      />
    </div>
  );
}

export default App;
