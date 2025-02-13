import { useState } from "react";
import padsData from "./assets/pads";
import Pad from "./components/Pad";
import MasterControl from "./MasterControl";

function App() {
  const [pads, setPads] = useState(padsData);
  const [disAbleOn, setdisAbleOn] = useState()

  function toggle(id) {
    setPads((prevPads) =>
      prevPads.map((pad) =>
        pad.id === id ? { ...pad, on: !pad.on } : pad
      )
    );
  }

  function toggleAll(mode) {
    setPads((prevPads) =>
      prevPads.map((pad) => ({
        ...pad,
        on: mode === "on" ? true : false,
      }))
    );
    mode ==="on" ? setdisAbleOn(true) : setdisAbleOn(false)
  }

  const buttonElements = pads.map((pad) => (
    <Pad
      key={pad.id}
      id={pad.id}
      color={pad.color}
      on={pad.on}
      toggle={toggle}
    />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
      <div className="master-button-container">
        <MasterControl
          type="off"
          toggleAll={toggleAll}
        />
        <MasterControl
          type="on"
          toggleAll={toggleAll}
        />
      </div>
    </main>
  );
}

export default App;
