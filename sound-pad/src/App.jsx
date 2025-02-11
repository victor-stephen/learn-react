import { useState } from 'react'
import padsData from "./assets/pads"
import Pad from "./components/Pad"

function App() {
  const [pads, setPads] = useState(padsData)

  const buttonElements = pads.map(pad => (
    <Pad key={pad.id} color={pad.color} on={pad.on} />
  ))

  

  return (
    <main>
      <div className='pad-container'>
        {buttonElements}
      </div>
      <button className='all-off'>Turn All Off</button>
    </main>
  )
}

export default App
