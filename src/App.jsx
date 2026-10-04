import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="counter-card">

        <h1>Counter Application</h1>
        <p className="subtitle">Manage your count easily</p>

        <div className="count-circle">
          <span>{count}</span>
        </div>

        {count === 0 && (
          <p className="message">Minimum limit reached</p>
        )}

        {count > 0 && (
          <p className="message positive">Count is increasing</p>
        )}

        <div className="buttons">
          <button className="increment" onClick={increment}>
            + Increment
          </button>

          <button className="decrement" onClick={decrement}>
            − Decrement
          </button>

          <button className="reset" onClick={reset}>
            ↻ Reset
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;