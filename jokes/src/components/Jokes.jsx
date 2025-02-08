import { useState, useEffect } from "react";

export default function Jokes({ jokeData }) {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown((prevStatus) => !prevStatus);
  }

  return (
    <div>
      {jokeData.setup? <h3>{jokeData.setup}</h3>: null}
      {isShown ? <p>{jokeData.punchline}</p> : null}
      <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
      <hr />
    </div>
  );
}
