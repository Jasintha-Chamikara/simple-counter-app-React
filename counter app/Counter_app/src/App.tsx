import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter-card">
      <h1>Counter App</h1>
      <h2 className="count-value">{count}</h2>

      <div className="button-row">
        <button className="btn btn-increase" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="btn btn-decrease" onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button className="btn btn-reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;