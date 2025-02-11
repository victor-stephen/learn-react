import { useState } from "react";
import Count from "./components/Count";
import "./index.css";

function App({ darkMode }) {
  const [count, setCount] = useState(0);

  const styles = darkMode ? { backgroundColor: "#222222" } : { backgroundColor: "#cccccc" };

  function subtract() {
    setCount((count) => count - 1);
  }
  function add() {
    setCount((count) => count + 1);
  }

  return (
    <main style={styles} className="container">
      <div className="counter">
        <button className="minus" onClick={subtract} aria-label="Decrease count">
          -
        </button>
      </div>
      <Count number={count} />
      <button className="add" onClick={add} aria-label="Increase count">
        +
      </button>
    </main>
  );
}

export default App;
