import { useState, useEffect } from "react";

export default function Jokes({ jokeData }) {
  const [isShown, setIsShown] = useState(false);

  function showPunchline() {
    setIsShown((prevStatus) => !prevStatus);
  }

  return (
    <div>
      {jokeData.setup  && <h3>{jokeData.setup}</h3>}
      {isShown && <p>{jokeData.punchline}</p>}
      <button onClick={showPunchline}>{isShown ? "Hide punchline" : "Show punchline"}</button>
      <hr />
    </div>
  );
}
