import "./App.css";
import { useState } from "react";

function App() {
  const [isButtonRed, setIsButtonRed] = useState(true);
  const backgroundColor = isButtonRed ? "red" : "blue";
  const buttonLabel = isButtonRed ? "Change to blue" : "Change to red";

  return (
    <div>
      <button
        style={{ backgroundColor }}
        onClick={() => setIsButtonRed(!isButtonRed)}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default App;
