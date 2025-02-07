import { useState } from "react";
import Jokes from "./components/Jokes.jsx";
import jokesData from "./assets/data/jokes.json";

function App() {
  return (
    <>
      <h1>Jokes</h1>
      {jokesData.map((joke) => (
        <Jokes key={joke.id} jokeData={joke} />
      ))}
    </>
  );
}

export default App;
